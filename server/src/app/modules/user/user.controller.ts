import { RequestHandler } from "express"
import { UserServices } from "./user.services"

const createUser: RequestHandler = async (req, res, next) => {
    const { name, email, password } = req.body
    console.log(name, email, password, "Requested User Data")
    try {
        const user = await UserServices.createUser({ name, email, password })
        res.status(201).json(user)
    }
    catch (err: any) {
        next({
            status: err.status,
            name: err.name,
            message: err.message
        })
    }
}

export const UserController = { createUser }
