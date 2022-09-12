import {Router} from "express";
import { deleteCredentialById, getCredentials, getCredentialsById, insertCredential } from "../controllers/credentialsController";
import { deleteWifiById, getWifiById, getWifis, insertWifi } from "../controllers/wifiControlle.js";
import { validateIdParams } from "../middlewares/ idParamsValidator.js";
import { schemaValidator } from "../middlewares/schemaValidator.js";
import { validateToken } from "../middlewares/tokenValidatorMIddleware.js";
import { credentialSchema } from "../schemas/credential_schema.js";
import { wifiSchema } from "../schemas/wifi_schema.js";

const wifiRouter = Router();

wifiRouter.post("/wifi", schemaValidator(wifiSchema), validateToken, insertWifi);
wifiRouter.get("/wifi", validateToken, getWifis);
wifiRouter.get("/wifi/:id", validateToken, validateIdParams, getWifiById);
wifiRouter.delete("/wifi/:id", validateToken, validateIdParams, deleteWifiById);

export default wifiRouter