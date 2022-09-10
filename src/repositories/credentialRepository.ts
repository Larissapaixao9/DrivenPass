import prisma from "../database/database"
export async function findDuplicatedTitle(id:number, title:string) {
    const duplicatedTitle = await prisma.credentials.findFirst({where:{
        id,
        title
    }})
    return duplicatedTitle
}

export async function insertCredential(userId:number,title:string, url:string, user:string, cryptedPassword:string) {
    const response = await prisma.credentials.create({data:{
        "title":title,
        "url":url,
        "user":user,
        "password":cryptedPassword
    }})
    return response;
}

export async function getCredentials(userId:number) {
    const response = await prisma.credentials.findMany({where:{id:userId}});
    return response
    
}