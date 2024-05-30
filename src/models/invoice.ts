import mongoose, { Schema } from "mongoose";

const invoiceSchema = new Schema({
  id: {
    type: mongoose.Types.ObjectId,
    require: true,
  },
  billFrom: {
    streetAdress: {
      type: String,
      require: true,
    },
    city: {
      type: String,
      require: true,
    },
    postCode: {
      type: String,
      require: true,
    },
    country: {
      type: String,
      require: true,
    },
  },
  billTo: {
    clientName: {
      type: String,
      require: true,
    },
    clientEmail: {
      type: String,
      require: true,
    },
    streetAddress: {
      type: String,
      require: true,
    },
    city: {
      type: String,
      require: true,
    },
    postCode: {
      type: String,
      require: true,
    },
    country: {
      type: String,
      require: true,
    },
    invoiceDate: {
      type: Date,
      require: true,
    },
    paymentTerms: {
      type: String,
      require: true,
    },
    projectDescription: {
      type: String,
      require: true,
    },
  },
  itemList: {
    itemName: {
      type: String,
      require: true,
    },
    quantity: {
      type: Number,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    total: {
      type: Number,
      require: true,
    },
  },
});

const Invoice = mongoose.model("Invoice", invoiceSchema);

export default Invoice;
