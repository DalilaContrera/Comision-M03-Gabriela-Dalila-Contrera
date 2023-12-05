import dotenv from "dotenv"

dotenv.config()

export const settingDotEnvPort = ()=>{
    return {port:process.env.PORT};
};

export const settingDotEnvDB = ()=>{
    return { db:{
        host: process.env.DB_MONGO_ATLAS,
    }};
};