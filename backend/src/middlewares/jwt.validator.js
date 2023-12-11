import jwt from "jsonwebtoken";
import { settingDotEnvSecret } from "../config/dotenv.js";

const {secret} = settingDotEnvSecret();

export const createAccessToken = (payLoad)=>{
   return new Promise((resolve, reject)=>{
    jwt.sign({ payload }, secret, { expiresIn: "1h"}, (err, token) => {
           if (err) reject(err);
           res.cookie("token", token);
           resolve(token);
        });
   });  
};


//token





