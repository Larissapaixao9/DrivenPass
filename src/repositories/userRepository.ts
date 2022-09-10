import prisma from "../database/database";
import { Iuser_data_login } from '../types/userInterfaces'

export async function findDuplicatedEmail(email:string){
    const result  = await prisma.user_data.findUnique({where:{
        email
    }})

    return result
}

export async function findUserPassword(email:string,password:string) {
    const user = await prisma.user_data.findFirst({
        where:{
            "email":email
        }
    })
    return user;
}

export async function insertLogin(email:string, password:string) {
    await prisma.user_data.create({
        data: {
            email,
            password
        }
    })
}

export async function insertLogup(email:string, password:string) {
    await prisma.user_data.create({
        data: {
            email,
            password
        }
    })
}