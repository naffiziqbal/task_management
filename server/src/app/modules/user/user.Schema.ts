import { Schema, model } from "mongoose";
import { IUser } from "../../types/interface";
import bcryptjs from 'bcryptjs'
import { NextFunction } from "express";

const userSchema = new Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
})

userSchema.pre("save", async function (next) {
    try {
        const salt = await bcryptjs.genSalt(10)
        this.password = await bcryptjs.hash(this.password, salt)
        next()
    } catch (error: any) {
        return error
    }
})


const User = model<IUser>('User', userSchema)
export default User
