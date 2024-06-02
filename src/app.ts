import bodyParser from "body-parser";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import swaggerMiddleware from "./middlewares/swagger.js";
import errorHandler from "./controllers/error.js";
import connectToMongo from "./config/connect.js";
import authRoutes from "./routes/auth.js";

dotenv.config();
connectToMongo();

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use("/", authRoutes);

app.use(errorHandler);

app.use("/", ...swaggerMiddleware);

app.listen(process.env.PORT || 3001);
