import prisma from "../database/database.js";
import { Credential, Wifi } from "@prisma/client";

export type CreateWifiData = Omit<Wifi, "id" | "create_at"| "user_id">

async function insertWifi(wifiData: CreateWifiData, userId: number){
    const wifis = await prisma.wifi.create({data: {...wifiData, user_id: userId}});

    return wifis
}

async function getAllWifis( userId: number) {
    const wifis = await prisma.wifi.findMany({
        where:{
            user_id: userId
        }
    })

    return wifis
}

async function getWifiById(wifiId: number) {
    const wifi = await prisma.wifi.findUnique({where:
        {id: wifiId}
    })

    return wifi
}

async function deleteWifiById(wifiId: number) {
    const wifi = await prisma.wifi.delete({where:{
        id: wifiId
    }})

    return wifi
}

export const wifiRepository = {
    insertWifi,
    getAllWifis,
    getWifiById,
    deleteWifiById
}