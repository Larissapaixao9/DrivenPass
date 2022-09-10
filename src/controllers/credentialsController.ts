import express from 'express'
import { Response, Request } from 'express'
import * as credentialServices from '../services/credentialsService'

export async function postCredential(req:Request,res:Response) {
    const { title, url, user, password } = req.body;

    try {
        const userId = res.locals.user;
        console.log(userId)

        const verifyDuplicatedTitle = await credentialServices.verifyDuplicatedTitle(userId,title)
        const insertCredential = await credentialServices.insertCredential(userId, title, url, user, password)

        return res.sendStatus(201)
    } catch (error) {
        console.log(error)
        return res.sendStatus(500)
    }
}

export async function getCredentials(req:Request,res:Response) {
 //Pegar do JWT   const { id } = req.body
    const id=1
 try {
    // const verifyUserId(id);=> ver se o token é valido de acordo com id
    const allCredentials = await credentialServices.getCredentials(id)
    return res.status(200).send({allCredentials})

 } catch (error) {
    console.log(error);
    return res.sendStatus(500)
    
 }
}