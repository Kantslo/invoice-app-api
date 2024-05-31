type PaymentTermsType =
  | "Net 1 Day"
  | "Net 7 Days"
  | "Net 14 Days"
  | "Net 30 Days";

export type InvoiceType = {
  billForm: {
    streetAddress: string;
    city: string;
    postCode: string;
    country: string;
  };
  billTo: {
    clientName: string;
    clientEmail: string;
    streetAddress: string;
    city: string;
    postCode: string;
    country: string;
    invoiceDate: Date;
    paymentTerms: PaymentTermType;
    projectDescription: string;
  };
  itemList: {
    itemName: string;
    quantity: number;
    price: number;
  };
};

export type UserType = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  invoices: InvoiceType[];
};
