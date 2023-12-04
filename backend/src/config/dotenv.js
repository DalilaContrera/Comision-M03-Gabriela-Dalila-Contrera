import dotenv from "dotenv"

dotenv.config()

export const settingDotEnvPort = ()=>{
    return {port:process.env.PORT};
};