import mongoose from "mongoose"

export const connectMongo = async()=>{
    try {
        await mongoose.connect()
        console.log("Base de datos conectada")
    } catch (error) {
        console.log("Error al conectarse a la base de datos")
    }
}