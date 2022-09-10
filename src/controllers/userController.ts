import express from 'express'
import { Response, Request } from 'express'
import * as userServices from '../services/userServices'
import * as userRepository from '../repositories/userRepository'
export async function login(req:Request, res:Response){
    const { email, password } = req.body
try {
    const verifyUserEmail = await userServices.verifyUserEmail(email);
    const verifyPassword = await userServices.verifyPassword(email,password);
    return res.status(200).send({
        "email":email,
        "password":password
    })
} catch (error) {
    console.log(error)
    return res.status(500).send(error)
}
}

export async function logup(req:Request, res:Response){
    
    const { email, password } = req.body
    try {
        const findDuplicatedEmail = await userServices.findDuplicatedEmail(email);
        const cryptedPassword = await userServices.cryptingPassword(email,password);

        return res.status(200).send({
            email,
            password
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send(error)
    }
    }