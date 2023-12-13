import express from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser"; 
import authRoutes from "./routes/auth.routes.js";
import taskRoutes from "./routes/task.routes.js";


export const app = express();

app.use(morgan("tiny"));
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use(authRoutes);
app.use(taskRoutes);

