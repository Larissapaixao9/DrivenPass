import { prisma } from '@prisma/client';
import bcrypt from 'bcrypt'
import * as userRepository from '../repositories/userRepository'
export async function findUserbyEmail(email:string) {
    const isUser = await userRepository.findUser(email);

}
export async function logup(email:string, password:string) {
    
    return 'heey'
}

export async function login(email:string, password:string) {
    
}

