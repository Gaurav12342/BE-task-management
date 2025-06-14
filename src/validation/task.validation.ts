import joi from "joi";

export const createTaskSchema = joi.object({
  title: joi.string().required(),
  description: joi.string().required(),
  dueDate: joi.string().required(),
  priority: joi.string().required(),
});

export const updateTaskSchema = joi.object({
  id: joi.string().required(),
  title: joi.string().required(),
  description: joi.string().required(),
  dueDate: joi.string().required(),
  priority: joi.string().required(),
});
