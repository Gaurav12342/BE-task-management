import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { createUser, signInUser } from "../service/user.service";
import { IFindUserByEmailResponse } from "../interfaces/user.interface";
import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../constant/constant";

const saltRounds = 10;

export const signUp = async (req: Request, res: Response): Promise<void> => {
  try {
    const { password, ...rest } = req?.body;

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const userPayload = {
      ...rest,
      password: hashedPassword,
    };

    const response = await createUser(userPayload);
    const { password: dbPassword, ...restParam } = response.toObject();
    res.status(201).json({
      code: "Created",
      data: restParam,
      message: "User created successfully",
    });
  } catch (err) {
    console.error("SignUp Error:", err);
    res.status(500).json({
      code: "ServerError",
      message: "An error occurred while creating the user",
    });
  }
};

export const signIn = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email } = req?.body;
    const findData: any = await signInUser(email);
    const { password: dbPassword, ...restParam } = findData;

    if (Object.values(findData)?.length) {
      const token = jwt.sign(
        {
          data: restParam,
        },
        SECRET_KEY,
        { expiresIn: "1h" }
      );
      res.status(200).json({
        code: "OK",
        accessToken: token,
        message: "User login successfully",
      });
    }
  } catch (err) {
    console.error("SignUp Error:", err);
    res.status(500).json({
      code: "ServerError",
      message: "An error occurred while logging the user",
    });
  }
};
