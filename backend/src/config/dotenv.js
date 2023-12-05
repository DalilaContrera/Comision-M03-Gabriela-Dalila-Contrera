import dotenv from "dotenv"

dotenv.config()

export const settingDotEnvPort = ()=>{
    return {port:process.env.PORT};
};

export const settingDotEnvDB = ()=>{
    return { db:{
        localhost: process.env.BD_LOCALHOST,
    }};
};