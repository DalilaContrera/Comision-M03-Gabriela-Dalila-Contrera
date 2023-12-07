import mongoose from "mongoose";
import {settingDotEnvDB} from "../config/dotenv.js"

const {db} = settingDotEnvDB()

export const connectMongo = async () => {
    try {
        await mongoose.connect("mongodb+srv://dalila:6RRXR6WJkLptlaMb@cluster0.onsbcfe.mongodb.net/?retryWrites=true&w=majority");
        console.log("Base de datos conectada");
    } catch (error) {
        console.log("Error al conectarse a la base de datos");
    }
};