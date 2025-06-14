import { ITaskSchema, ITaskUpdateSchema } from "../interfaces/task.interface";
import { taskModal } from "../modal/task.modal";

export const listsService = async (
  page: number,
  limit: number,
  search?: string,
  sort?: string
) => {
  try {
    const skip = (page - 1) * limit;

    const filter = search ? { title: { $regex: search, $options: "i" } } : {};
    const sortOrder = sort === "desc" ? -1 : 1;

    const [data, total] = await Promise.all([
      taskModal
        .find(filter)
        .sort({ title: sortOrder })
        .skip(skip)
        .limit(limit)
        .lean(),
      taskModal.countDocuments(filter),
    ]);
    return { data, total };
  } catch (error) {
    throw error;
  }
};

export const createService = async (obj: ITaskSchema) => {
  try {
    const response = await taskModal.create(obj);
    return response;
  } catch (error) {
    throw error;
  }
};

export const getByIdService = async (id: string) => {
  try {
    const response = await taskModal.findById(id);
    return response;
  } catch (error) {
    throw error;
  }
};

export const deleteByIdService = async (id: string) => {
  try {
    const response = await taskModal.findByIdAndDelete(id);
    return response;
  } catch (error) {
    throw error;
  }
};

export const updateByIdService = async (obj: ITaskUpdateSchema) => {
  const { id, ...rest } = obj;
  try {
    const response = await taskModal.findByIdAndUpdate(id, { $set: rest });
    return response;
  } catch (error) {
    throw error;
  }
};
