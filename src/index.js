import "dotenv/config";
import "./config/db.js";
import e from "express";
import expeditionRoute from "./routes/expeditionRoute.js";
import explorerRoute from "./routes/explorerRoute.js";
import speciesRoute from "./routes/speciesRoute.js";

const app = e();

app.use(e.json());

app.use("/expedition", expeditionRoute);
app.use("/explorer", explorerRoute);
app.use("/species", speciesRoute);

app.listen(process.env.PORT, () => console.log("Servidor rodando na porta 6000!"));