import { Schema, model } from "mongoose";
import { ITaskSchema } from "../interfaces/task.interface";

const taskSchema = new Schema<ITaskSchema>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    dueDate: {
      type: String,
      required: true,
      trim: true,
    },
    priority: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true, collection: "task" }
);

export const taskModal = model<ITaskSchema>("task", taskSchema);
