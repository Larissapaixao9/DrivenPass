import { prisma } from '@prisma/client';
import bcrypt from 'bcrypt'
import * as userRepository from '../repositories/userRepository'



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
    console.log(isUser)
}

