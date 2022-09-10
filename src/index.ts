import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import userRouter from './routes/userRoute'
import 'express-async-errors'
import {errorHandlerMiddleware} from './middlewares/errorHandlerMiddleware'
//import bodyParser from 'body-parser'
dotenv.config()
const app = express()

//middlewares
app.use(cors())
app.use(express.json())
app.use(errorHandlerMiddleware)
app.use(userRouter)



const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>console.log(`rodando na porta ${PORT}`))