import { Router} from "express";
import { createTask, deleteTask, getAllTask, getTaskByID, updateTask } from "../controllers/task.controller";
import { authRequired } from "../middlewares/validateToken";

const routes = Router();

routes.get("/task", authRequired, getAllTask);
routes.get("/task/:id",authRequired, getTaskByID);
routes.post("/task",authRequired, createTask);
routes.put("/task/;id", updateTask);
routes.delete("/task/:id",authRequired, deleteTask);


export default routes;