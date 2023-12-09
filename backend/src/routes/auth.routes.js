//endpoints del servidor
import {Router} from "express"
import {register, login} from "../controllers/auth.controller.js"

export const routes = Router()

//rutas para registro de usuario
routes.post("/register", register)

//rutas para el login
routes.post("/login", login)

export default routes