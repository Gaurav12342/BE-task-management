import mongoose from "mongoose";
import { userModal } from "../modal/user.modal";
import { IUserSchema } from "../interfaces/user.interface";

export const createUser = async (obj: IUserSchema) => {
  try {
    const response = await userModal.create(obj);
    return response;
  } catch (error) {
    throw error;
  }
};

export const signInUser = async (email: string) => {
  try {
    const response = await userModal.findOne({ email }).lean();
    return response;
  } catch (error) {
    throw error;
  }
};
