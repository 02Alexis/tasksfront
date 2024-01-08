import { Task } from "../interfaces/task.interface";

const URL = "http://localhost:3000/api";

export const CreateTaskRequest = (task: Task) =>
  fetch(`${URL}/task`, {
    method: "POST",
    body: JSON.stringify(task),
    headers: {
      "Content-Type": "application/json",
    },
  });
