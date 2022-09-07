import prisma from "../database/database";
import { Iuser_data_login } from '../types/userInterfaces'

export async function findUser(email:string){
    const result  = await prisma.user_data.findMany({where:{
        email:email
    }})

    return result
}

export async function insertLogin(user:Iuser_data_login) {
    await prisma.user_data.create({
        data: user
    })
}

export async function insertLogup(user:Iuser_data_login) {
    await prisma.user_data.create({
        data: user
    })
}