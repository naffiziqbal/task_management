import { IUser } from "../../types/interface";
import User from "./user.Schema";


class existingErrorMessage extends Error {
    status: number
    constructor(message: string, status?: number) {
        super(message)
        this.name = "UserAlreadyExists",
            this.status = status || 400
    }
}

const createUser = async (user: IUser) => {
    const existing = await User.findOne({ email: user.email })
    if (!existing) {
        const data = await User.create(user)
        return data
    }
    throw new existingErrorMessage("User Already Exists", 409)
}



export const UserServices = { createUser }

