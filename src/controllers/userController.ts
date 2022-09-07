import express from 'express'
import { Response, Request } from 'express'
import * as userServices from '../services/userServices'

export async function login(req:Request, res:Response){
    const { email, password } = req.body
try {
    return res.status(200).send({
        "email":"",
        "password":""
    })
} catch (error) {
    console.log(error)
    return res.status(500).send(error)
}
}

export async function logup(req:Request, res:Response){
    
    const { email, password } = req.body
    try {
        return res.status(200).send({
            "email":"",
            "password":""
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send(error)
    }
    }