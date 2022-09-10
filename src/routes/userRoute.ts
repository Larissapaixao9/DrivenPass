import express from "express";
import { logup, login } from '../controllers/userController'
import { validateSchemaMiddleware } from "../middlewares/validateSchema";
import { userSchema } from "../schemas/user_schema";
const router = express.Router()

router.post('/logup',validateSchemaMiddleware(userSchema),logup)
router.post('/login',validateSchemaMiddleware(userSchema),login)

export default router