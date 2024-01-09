import { CreateTask } from "../interfaces/task.interface";

const URL = "http://localhost:3000/api";

export const CreateTaskRequest = (task: CreateTask) =>
  fetch(`${URL}/task`, {
    method: "POST",
    body: JSON.stringify(task),
    headers: {
      "Content-Type": "application/json",
    },
  });

export const getTaskRequest = () => fetch(`${URL}/task`);

export const deleteTaskRequest = (id: string) =>
  fetch(`${URL}/task/${id}`, {
    method: "DELETE",
  });
