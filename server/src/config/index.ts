import dotenv from "dotenv"
import path from 'path'


dotenv.config({ path: path.join(process.cwd(), ".env") })

export default {
    port: process.env.PORT || 7000,
    database_url: process.env.DB_URL,
}
