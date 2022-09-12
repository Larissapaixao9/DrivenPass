import { prisma } from '@prisma/client';
import bcrypt from 'bcrypt'
import * as userRepository from '../repositories/userRepository'
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'

dotenv.config()

export async function findDuplicatedEmail(email:string) {
    const isUser = await userRepository.findDuplicatedEmail(email);
    console.log(isUser)
    if(isUser){
        throw { type: "conflict", message: "email já cadastrado" }
    }
}

export async function cryptingPassword(email:string,password:string) {
   const cryptedPassword = bcrypt.hashSync(password,10);
   console.log(cryptedPassword)

   if(cryptedPassword){
    logup(email,cryptedPassword)
   }
}


export async function logup(email:string, password:string) {
    
    const insert = userRepository.insertLogup(email,password)
}


export async function verifyUserEmail(email:string) {
    const isUser = await userRepository.findDuplicatedEmail(email);
    console.log(isUser)
    if(!isUser){
        throw { type: "not_found", message: "usuario não cadastrado" }
    }
}

export async function verifyPassword(email:string,password:string) {
    let verifyuserPassword
    
    const isUser = await userRepository.findUserPassword(email,password);
    if(isUser){
        verifyuserPassword=bcrypt.compareSync(password, isUser.password)
    }

    if(!isUser){
        throw {type: "not_found", message: "senha ou email incorreto"}
    }

    if(verifyuserPassword==false){
        throw {type: "not_found", message: "senha ou email incorreto"}
    }
    console.log(`esse é o isUser: ${isUser}`)

    const SECRET: string = process.env.JWT_SECRET_KEY ?? '';
    const EXPIRES_IN = process.env.TOKEN_EXPIRES_IN;
    const payload = {
        id: 1,
        email: email
      };
      const jwtConfig = {
        expiresIn: EXPIRES_IN
      };
      const token = jwt.sign(payload, SECRET, jwtConfig);

    // const secretKey = process.env.JWT_SECRET_KEY ;
    // const token = jwt.sign(
    //     id:isUser.id,
    //     secret:secretKey
    // )
    // console.log(secretKey)
    // const token = jwt.sign({},process.env.JWT_SECRET_KEY || "secret_key",{
    //     subject:isUser.id.toString(),
    //     expiresIn:"20s"
    // })
    await userRepository.startSession(isUser.id,token);
    console.log(`O TOKEN É ${token}`)
    return {token};
}

async function logOut(sessionId: number) {
    console.log(sessionId)
    const logOutSession = await userRepository.finishSession(sessionId)

    return logOutSession
}


