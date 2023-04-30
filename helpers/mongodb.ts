import mongoose from "mongoose";

export default async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGOURI!);
        console.log("🍀",`MongoDB Connected: ${conn.connection.host}`);
    } catch (error: any) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
}