import express from "express";
import cors from "cors";
import { router } from "./infrastructure/routes";

const PORT = process.env.PORT || 8000;
const app = express();
app.use(cors());
app.use("/api", router);
app.listen(PORT, () => console.log(`Listo por el puerto ${PORT}`));
