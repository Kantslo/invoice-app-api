import express from "express";

import { createInvoice } from "../controllers/invoice.js";

const router = express.Router();

// router.get("/invoices", getInvoices);
// router.get("/invoice", getInvoice);
router.post("/invoice", createInvoice);
