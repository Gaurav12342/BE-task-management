import { Document } from "mongoose";

export interface IUserSchema extends Document {
  fname: string;
  lname: string;
  email: string;
  password: string;
}

export interface IUserSignInSchema {
  email: string;
  password: string;
}

export interface IFindUserByEmailResponse extends Document {
  fname?: string;
  lname?: string;
  email?: string;
  password?: string;
  createdAt?: Date | null;
  updatedAt?: Date | null;
}
