import { Request, Response } from "express";
import {
  createService,
  deleteByIdService,
  getByIdService,
  listsService,
  updateByIdService,
} from "../service/task.service";

export const lists = async (req: Request, res: Response): Promise<void> => {
  try {
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
  } catch (err) {
    console.error("Listing Error:", err);
    res.status(500).json({
      code: "ServerError",
      message: "An error occurred while creating the user",
    });
  }
};

export const create = async (req: Request, res: Response): Promise<void> => {
  try {
    const response = await createService(req?.body);
    res.status(201).json({
      code: "Created",
      data: response,
      message: "Create task successfully",
    });
  } catch (err) {
    console.error("Create Error:", err);
    res.status(500).json({
      code: "ServerError",
      message: "An error occurred while creating the user",
    });
  }
};

export const findById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const response = await getByIdService(id);
    res.status(200).json({
      code: "OK",
      data: response,
      message: "Get task by id successfully",
    });
  } catch (err) {
    console.error("Get Error:", err);
    res.status(500).json({
      code: "ServerError",
      message: "An error occurred while creating the user",
    });
  }
};

export const deleteTask = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  try {
    const response = await deleteByIdService(id);
    res.status(200).json({
      code: "OK",
      data: response,
      message: "Delete task successfully",
    });
  } catch (err) {
    console.error("Delete Error:", err);
    res.status(500).json({
      code: "ServerError",
      message: "An error occurred while creating the user",
    });
  }
};

export const update = async (req: Request, res: Response): Promise<void> => {
  try {
    const response = await updateByIdService(req?.body);
    res.status(201).json({
      code: "Update",
      data: response,
      message: "Update task successfully",
    });
  } catch (err) {
    console.error("Update Error:", err);
    res.status(500).json({
      code: "ServerError",
      message: "An error occurred while creating the user",
    });
  }
};
