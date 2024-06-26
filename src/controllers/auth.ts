import { NextFunction, Request, Response } from "express";
import bcrypt from "bcrypt";

import userSchema from "../schemas/user.js";
import User from "../models/user.js";

export const signup = async (
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  const { body } = req;

  try {
    const validatedData = userSchema.parse(body);

    const { firstname, lastname, email, password } = validatedData;

    const user = await User.findOne({ email });

    if (user) {
      return res
        .status(401)
        .json({ message: "User with this email already exists!" });
    }

    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      firstname,
      lastname,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    return res
      .status(201)
      .json({ message: "User created successfully!", user: newUser });
  } catch (err) {
    return res.status(401).json(err);
  }
};
