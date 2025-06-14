import { Request, Response, NextFunction } from "express";
import {
  createTaskSchema,
  updateTaskSchema,
} from "../validation/task.validation";

export const createTaskValidation = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { error } = createTaskSchema.validate(req.body);
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

export const updateTaskValidation = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { error } = updateTaskSchema.validate(req.body);
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
