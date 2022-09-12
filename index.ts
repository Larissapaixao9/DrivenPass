// import express from 'express'
// import cors from 'cors'
// import dotenv from 'dotenv'
// import userRouter from './routes/userRoute'
// import credentialRoutes from './routes/credentialRoutes'
// import 'express-async-errors'
// import {errorHanddlingMiddleware} from './middlewares/errorHandlingMiddleware'
// //import bodyParser from 'body-parser'
// dotenv.config()
// const app = express()

// //middlewares
// app.use(cors())
// app.use(express.json())
// app.use(errorHanddlingMiddleware)
// app.use(userRouter)
// app.use(credentialRoutes)



// const PORT = process.env.PORT || 3000

// app.listen(PORT, ()=>console.log(`rodando na porta ${PORT}`))

import express, { json } from "express";
import "express-async-errors";
import dotenv from "dotenv";

import router from "./src/routes/index.js"; 
import { errorHanddlingMiddleware}  from "./src/middlewares/errorHandlingMiddleware.js";

dotenv.config();

const app = express();
app.use(json());
app.use(router);
app.use(errorHanddlingMiddleware);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`)
})