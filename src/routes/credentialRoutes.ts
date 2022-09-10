import { validateSchemaMiddleware } from "../middlewares/validateSchema";
import {credentialSchema} from '../schemas/credential_schema'
import { postCredential, getCredentials } from '../controllers/credentialsController'
import express from "express";

const router = express.Router()

router.post('/createCredential',validateSchemaMiddleware(credentialSchema),postCredential);
router.get('/getCredentials',getCredentials)
