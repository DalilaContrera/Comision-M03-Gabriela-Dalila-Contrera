import express from "express";
import morgan from "morgan";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";


export const app = express();

app.use(morgan("tiny"));
app.use(express.json());
app.use(cors());

app.use(authRoutes);


