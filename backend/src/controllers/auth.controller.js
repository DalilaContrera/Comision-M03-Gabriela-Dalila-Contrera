//autenticacion del usuario
import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import { createAccessToken } from "../middlewares/jwt.validator.js";
import { token } from "morgan";

//registro usuario
export const register = async(req, res)=>{
    const {username, email, password} = req.body;

   try {
//encriptar contraseña
const passwordHash = await bcrypt.hash(password, 10)
   //se guarda registro de usuario   
      const newUser = new User({
        username,
        email,
        password: passwordHash,
       });

       const userSaved = await newUser.save();

       //Token
 const token = await createAccessToken({ id: userSaved._id })
 res.cookie("token", token)
 res.json({message: "Usuario registrado con exito",
  id: userSaved.id,
  username: userSaved.username,
  email: userSaved.email,
})

   } catch (error) {
      res.status(500).json({message: "Error al registrar el Usuario" , error})
   }



};

//login usuario
export const login = async(req,res)=>{};