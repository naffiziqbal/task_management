import app from "./app/app";
import config from "./config";
import mongoose from 'mongoose';

main().catch(err => console.log(err));

const port = config.port
async function main() {
    try {
        await mongoose.connect(config.database_url as string);
        app.listen(port, () => `Server Is Listening on ${port}`)
        console.log(`Server Is Listening on ${port}`)

    } catch (error) {
        console.log(error)
    }

}
