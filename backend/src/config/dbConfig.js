import mongoose from "mongoose";
import { MONGODB_URL } from "./serverConfig.js";

export default async function connectDB(){
    try {
        await mongoose.connect(MONGODB_URL);
        console.log("Connected to MongoDB successfully...");
    } catch (error) {
        console.log("Error connecting to MongoDB:", error);
    }
}