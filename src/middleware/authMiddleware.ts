import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { SECRET_KEY } from "../constant/constant";

dotenv.config();

export interface AuthenticatedRequest extends Request {
  user?: any;
}

export const authMiddleware: any = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Response | void => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      code: "Unauthorized",
      message: "Access token is missing",
    });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({
      code: "Forbidden",
      message: "Invalid or expired token",
    });
  }
};
