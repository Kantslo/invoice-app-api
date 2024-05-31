import { z } from "zod";

const userSchema = z.object({
  firstname: z
    .string()
    .min(4, "Firstname should be at least 4 characters long.")
    .refine((value) => {
      if (!value) {
        throw new Error("Firstname is required!");
      }
      return true;
    }),
  lastname: z
    .string()
    .min(3, "Lastname should be at least 3 characters long.")
    .refine((value) => {
      if (!value) {
        throw new Error("Lastname is required!");
      }
      return true;
    }),
  email: z
    .string()
    .email("Invalid email address.")
    .refine((value) => {
      if (!value) {
        throw new Error("E-mail is required!");
      }
      return true;
    }),
  password: z
    .string()
    .min(8, "Password should be at least 8 characters long.")
    .max(20, "Password must not be more than 20 characters long!")
    .refine((value) => {
      if (!value) {
        throw new Error("Password is required!");
      }
      return true;
    }),
});

export default userSchema;
