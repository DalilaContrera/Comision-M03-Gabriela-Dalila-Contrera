import mongoose from "mongoose";
import {settingDotEnvDB} from "../config/dotenv.js"

const {db} = settingDotEnvDB()

export const connectMongo = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/proyecto-final");
        console.log("Base de datos conectada");
    } catch (error) {
        console.log("Error al conectarse a la base de datos");
    }
};