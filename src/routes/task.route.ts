import { Router } from "express";
import {
  create,
  deleteTask,
  findById,
  lists,
  update,
} from "../controller/task.controller";
import {
  createTaskValidation,
  updateTaskValidation,
} from "../middleware/taskValidation";
import { authMiddleware } from "../middleware/authMiddleware";

const router = Router();

router.get("/lists", authMiddleware, lists);
router.post("/create", createTaskValidation, authMiddleware, create);
router.get("/list/:id", authMiddleware, findById);
router.delete("/delete/:id", authMiddleware, deleteTask);
router.put("/update", updateTaskValidation, authMiddleware, update);

export default router;
