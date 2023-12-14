import { body, validationResult } from "express-validator";

//Validamos el Register
export const validateRegister = [
    body("username")
    .length({min: 6})
    .withMessage("El Username debe tener al menos 6 caracteres"),

    body("email")
    .isEmail()
    .withMessage("Ingrese un mail valido")
    .notEmpty()
    .withMessage("El Email no debe estar vacio"),

    body("password")
    .isLength({ min: 6 })    
    .withMessage("El password debe tener al menos 6 caracteres") 
];

//Validamos el Login
export const validateLogin = [
    body("email")
    .isEmail()
    .withMessage("Ingrese un mail valido")
    .notEmpty()
    .withMessage("El Email no debe estar vacio"),

    body("password")
    .isLength({ min: 6 })    
    .withMessage("El password debe tener al menos 6 caracteres") 
];

//Validacion del error
export const handleErrorValidations = ( req, res, next) => {
    const error = validationResult(req)

    if(!error.isEmpty()){
        return res.status(400).json({ message: "Error en la validacion de atributos", error})
    }
    next()
}

