import { Request, Response } from "express";
import {
  createService,
  deleteByIdService,
  getByIdService,
  listsService,
  updateByIdService,
} from "../service/task.service";
import { wrapAsync } from "../utils/wrapAsync";

export const lists = wrapAsync(async (req: Request, res: Response) => {
  const page: number = parseInt(req.query.page as string) || 1;
  const limit: number = parseInt(req.query.limit as string) || 10;
  const search: string = (req.query.search as string) || "";
  const sort: string = (req.query.sort as string) || "asc";

  const { data, total } = await listsService(page, limit, search, sort);

  res.status(200).json({
    code: "OK",
    data,
    meta: {
      totalCount: total,
      page,
      totalPages: Math.ceil(total / limit),
    },
    message: "get task lists successfully",
  });
});

export const create = wrapAsync(async (req: Request, res: Response) => {
  const response = await createService(req?.body);
  res.status(201).json({
    code: "Created",
    data: response,
    message: "Create task successfully",
  });
});

export const findById = wrapAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const response = await getByIdService(id);
  res.status(200).json({
    code: "OK",
    data: response,
    message: "Get task by id successfully",
  });
});

export const deleteTask = wrapAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const response = await deleteByIdService(id);
  res.status(200).json({
    code: "OK",
    data: response,
    message: "Delete task successfully",
  });
});

export const update = wrapAsync(async (req: Request, res: Response) => {
  const response = await updateByIdService(req?.body);
  res.status(201).json({
    code: "Update",
    data: response,
    message: "Update task successfully",
  });
});
