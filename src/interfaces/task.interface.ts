export interface ITaskSchema {
  title?: string;
  description?: string;
  dueDate?: string;
  priority?: string;
  status?: string;
}

export interface ITaskUpdateSchema {
  id?: string;
  title?: string;
  description?: string;
  dueDate?: string;
  priority?: string;
  status?: string;
}
