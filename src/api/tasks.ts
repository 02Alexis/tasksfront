const URL = "http://localhost:3000/api";

interface Task {
  title: string;
  description?: string;
  done?: boolean;
}

export const CreateTaskRequest = (task: Task) =>
  fetch(`${URL}/task`, {
    method: "POST",
    body: JSON.stringify(task),
    headers: {
      "Content-Type": "application/json",
    },
  });
