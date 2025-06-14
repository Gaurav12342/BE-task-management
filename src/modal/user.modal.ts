import { Schema, model } from "mongoose";
import { IUserSchema } from "../interfaces/user.interface";

const userSchema = new Schema<IUserSchema>(
  {
    fname: {
      type: String,
      required: true,
      trim: true,
    },
    lname: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true, collection: "user" }
);

export const userModal = model<IUserSchema>("user", userSchema);
