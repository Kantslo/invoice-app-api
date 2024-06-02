import express from "express";

import { signup } from "src/controllers/index.js";

const router = express.Router();

router.post("/signup", signup);

router.get("/login");

export default router;
