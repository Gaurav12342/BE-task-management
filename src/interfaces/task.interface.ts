export interface ITaskSchema {
  title?: string;
  description?: string;
  dueDate?: string;
  priority?: string;
}

export interface ITaskUpdateSchema {
  id?: string;
  title?: string;
  description?: string;
  dueDate?: string;
  priority?: string;
}
