// routes/user.routes.ts
import { Router } from "express";
import { signIn, signUp } from "../controller/user.controller";
import {
  userSignInValidation,
  userValidation,
} from "../middleware/userValidation";

const router = Router();

router.post("/sign-up", userValidation, signUp);
router.post("/sign-in", userSignInValidation, signIn);

export default router;
