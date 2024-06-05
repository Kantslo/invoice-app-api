import bodyParser from "body-parser";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectToMongo from "./config/connect.js";
import swaggerMiddleware from "./middlewares/swagger.js";
import errorHandler from "./error.js";

dotenv.config();
connectToMongo();

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use(errorHandler);

app.use(...swaggerMiddleware);

app.listen(process.env.PORT || 3001, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
