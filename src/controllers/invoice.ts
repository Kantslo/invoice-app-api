import { NextFunction, Request, Response } from "express";

import Invoice from "../models/invoice.js";

export const createInvoice = async (
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  try {
    const {
      createdAt,
      paymentDue,
      description,
      paymentTerms,
      status,
      senderAddress,
      clientAddress,
      items,
      total,
    } = req.body;

    const newInvoice = new Invoice({
      createdAt,
      paymentDue,
      description,
      paymentTerms,
      status,
      senderAddress: {
        streetAddress: senderAddress.street,
        city: senderAddress.city,
        postCode: senderAddress.postCode,
        country: senderAddress.country,
      },
      clientAddress: {
        street: clientAddress.street,
        city: clientAddress.city,
        postCode: clientAddress.postCode,
        country: clientAddress.country,
      },
      items,
      total,
    });

    await newInvoice.save();

    return res.status(201).json({ message: "Invoice created successfully." });
  } catch (err) {
    return err;
  }
};
