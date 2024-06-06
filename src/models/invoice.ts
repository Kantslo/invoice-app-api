import mongoose, { Schema } from "mongoose";

const invoiceSchema = new Schema({
  billFrom: {
    senderStreetAddress: {
      type: String,
      require: true,
    },
    senderCity: {
      type: String,
      require: true,
    },
    senderPostCode: {
      type: String,
      require: true,
    },
    senderCountry: {
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
  },
  creator: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    require: true,
  },
});

const Invoice = mongoose.model("Invoice", invoiceSchema);

export default Invoice;
