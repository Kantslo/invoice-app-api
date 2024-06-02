import { NextFunction, Request, Response } from "express";
import Invoice from "src/models/invoice.js";

export const createInvoice = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const {
    streetAddress,
    city,
    postCode,
    country,
    clientName,
    clientEmail,
    streetAddressClient,
    cityClient,
    postCodeClient,
  } = req.body;

  const newInvoice = new Invoice({
    streetAddress,
    city,
    postCode,
    country,
    clientName,
    clientEmail,
    streetAddressClient,
    cityClient,
    postCodeClient,
  });

  try {
    await newInvoice.save();

    res
      .status(201)
      .json({ message: "Invoice created successfully.", billedTo: clientName });
  } catch (err: any) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
