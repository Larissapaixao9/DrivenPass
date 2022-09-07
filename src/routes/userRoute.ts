import express from "express";
import { logup, login } from '../controllers/userController'
const router = express.Router()

router.post('/logup',logup)
router.post('/login',login)

export default router