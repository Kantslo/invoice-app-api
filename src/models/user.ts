import mongoose, { Schema } from "mongoose";

import { UserType } from "../types/user-types.js";

const userSchema = new Schema<UserType>({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  invoices: [
    {
      type: Schema.Types.ObjectId,
      ref: "Invoice",
    },
  ],
});

const User = mongoose.model("User", userSchema);

export default User;
