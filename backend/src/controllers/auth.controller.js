//autenticacion del usuario
import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

//registro usuario
export const register = async(req, res)=>{
    const {username, email, password} = req.body;

   try {
//encriptar contraseña
const passwordHash = await bcrypt.hash(password, 10)
      
      const newUser = new User({
        username,
        email,
        password: passwordHash,
       });

 const userSaved = await newUser.save();
 
//token
jwt.sign(
   { id:userSaved._id},
   "proyectoBd",
   { expiresIn: "10h"},
   (err, token) => {
      if (err) console.log(err);
      res.cookie("token", token);
      res.json({userSaved});
   }
   );



      res.status(200).json(userSaved)
   } catch (error) {
      res.status(500).json({message: "Error al registrar el Usuario" , error})
   }



};

//login usuario
export const login = async(req,res)=>{};