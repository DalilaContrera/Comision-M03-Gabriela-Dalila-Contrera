import { Router} from "express";
import { 
    createTask,
    deleteTask,
    getAllTask,
    getTaskByID,
    updateTask,
} from "../controllers/task.controller.js";
import { authRequired } from "../middlewares/validateToken.js";

const routes = Router();

routes.get("/task", authRequired, getAllTask);
routes.get("/task/:id",authRequired, getTaskByID);
routes.post("/task",authRequired, createTask);
routes.put("/task/:id",authRequired, updateTask);
routes.delete("/task/:id",authRequired, deleteTask);


export default routes;