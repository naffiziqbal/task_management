import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import errorHandler from './errors/globalErrorHandler'
import userRoutes from './modules/user/user.routes'


const app = express()
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use("/api/v1/user", userRoutes)
app.use(errorHandler)



export default app


