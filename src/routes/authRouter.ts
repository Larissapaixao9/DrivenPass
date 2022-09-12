import {Router} from "express";

import { logOut, signIn, signUp } from "../controllers/authController.js";
import { schemaValidator } from "../middlewares/schemaValidator.js";
import { validateToken } from "../middlewares/tokenValidatorMIddleware.js";
import { userSchema } from "../schemas/user_schema.js";

const authRouter = Router();

authRouter.post("/signup", schemaValidator(userSchema) ,signUp);
authRouter.post("/signin", schemaValidator(userSchema), signIn);
authRouter.patch("/logout", validateToken, logOut)

export default authRouter