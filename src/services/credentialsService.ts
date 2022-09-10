import Cryptr from 'cryptr'
import cryptr from 'cryptr'
import * as credentialsRepository from '../repositories/credentialRepository'
export async function verifyDuplicatedTitle(id:number,title:string) {
    const isTitleDuplicated = await credentialsRepository.findDuplicatedTitle(id,title)
    console.log(isTitleDuplicated)
    if(isTitleDuplicated){
        throw { type: "conflict", message: "titulo já cadastrado" }
    }
}

export async function insertCredential(userId:number,title:string, url:string, user:string, password:string) {
    let insert;
    const Cryptr = new cryptr('myTotallySecretKey');
    const encriptedPassword = Cryptr.encrypt(password);
    console.log(encriptedPassword)
 
    if(encriptedPassword){
        insert = await credentialsRepository.insertCredential(userId,title, url, user, encriptedPassword)
    }
   
}

export async function getCredentials(userId:number) {
    const credentials = await credentialsRepository.getCredentials(userId);
    console.log(credentials);

    const Cryptr = new cryptr('myTotallySecretKey');
    const credentialsWithDecryptedPassword = credentials?.map((credential)=>credential.password=Cryptr.decrypt(credential.password))
    return credentialsWithDecryptedPassword;
}