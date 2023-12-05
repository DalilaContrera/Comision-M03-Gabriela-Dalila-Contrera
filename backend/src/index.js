import { app } from "./app.js";
import {settingDotEnvPort} from "./config/dotenv.js";
import {connectMongo} from "./database/db.js";

const {port} = settingDotEnvPort()

connectMongo()

app.listen(port, console.log(`Servidor en puerto ${port}`));

