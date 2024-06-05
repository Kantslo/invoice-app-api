import mongoose, { Schema } from "mongoose";

import { UserType } from "../types/user-types.js";

const userSchema = new Schema<UserType>({
  firstname: {
    type: String,
    require: true,
  },
  lastname: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
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
