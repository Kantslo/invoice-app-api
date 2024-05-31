import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import authRoutes from "./routes/auth.js";
import errorHandler from "./controllers/error-handler.js";

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use("/", authRoutes);

app.use(errorHandler);

app.listen(3000);
