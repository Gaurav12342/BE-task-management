import { Request, Response, NextFunction } from "express";
import { userSchema, userSignInSchema } from "../validation/user.validation";

export const userValidation = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { error } = userSchema.validate(req.body);
    if (error) {
      res.status(400).json({
        code: "ValidationError",
        message: error.details[0].message,
      });
      return;
    }
    next();
  } catch (err) {
    next(err);
  }
};

export const userSignInValidation = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { error } = userSignInSchema.validate(req.body);
    if (error) {
      res.status(400).json({
        code: "ValidationError",
        message: error.details[0].message,
      });
      return;
    }
    next();
  } catch (err) {
    next(err);
  }
};
