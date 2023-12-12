//endpoints del servidor
import { Router } from "express"
import { register, login, logout, profile } from "../controllers/auth.controller.js"
import { authRequired } from "../middlewares/validateToken.js";


const routes = Router()

//rutas para registro de usuario
routes.post("/register", register)

//rutas para el login
routes.post("/login", login);

//rutas para el logout
routes.post("/logout", logout);

//rutas para el perfil
routes.get("/profile", authRequired, profile);

export default routes;