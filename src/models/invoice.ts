import { Schema, model } from "mongoose";

const itemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  total: {
    type: Schema.Types.Number,
    required: true,
  },
});

const invoiceSchema = new Schema({
  createdAt: {
    type: Schema.Types.String,
    required: true,
  },
  paymentDue: {
    type: Schema.Types.String,
    required: true,
  },
  description: {
    type: Schema.Types.String,
    required: true,
  },
  paymentTerms: {
    type: Schema.Types.String,
    required: true,
  },
  status: {
    type: Schema.Types.String,
    required: true
  },
  senderAddress: new Schema({
    streetAddress: {
      type: Schema.Types.String,
      required: true,
    },
    city: {
      type: Schema.Types.String,
      required: true,
    },
    postCode: {
      type: Schema.Types.String,
      required: true,
    },
    country: {
      type: Schema.Types.String,
      required: true,
    },
  }),
  clientAddress: new Schema({
    street: {
      type: Schema.Types.String,
      required: true,
    },
    city: {
      type: Schema.Types.String,
      required: true,
    },
    postCode: {
      type: Schema.Types.String,
      required: true,
    },
    country: {
      type: Schema.Types.String,
      required: true,
    },
  }),
  items: {
    type: [itemSchema],
    required: true,
  },
  total: {
    type: Schema.Types.Number,
    required: true,
  },
});

const Invoice = model("Invoice", invoiceSchema);

export default Invoice;
