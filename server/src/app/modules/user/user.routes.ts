import { Router } from "express";
import { UserController } from "./user.controller";


const userRoutes = Router()

userRoutes.post('/create-user', UserController.createUser)


export default userRoutes
