import { createContext, useEffect, useState } from "react";
import { CreateTaskRequest, getTaskRequest } from "../api/tasks";
import { CreateTask, Task } from "../interfaces/task.interface";

interface taskContextValue {
  tasks: Task[];
  createTask: (task: CreateTask) => void;
}

export const TaskContext = createContext<taskContextValue>({
  tasks: [],
  createTask: () => {},
});

interface Props {
  children: React.ReactNode;
}

export const TaskProvider: React.FC<Props> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    getTaskRequest()
      .then((response) => response.json())
      .then((data) => setTasks(data));
  }, []);

  const createTask = async (task: CreateTask) => {
    console.log(task);
    const res = await CreateTaskRequest(task);
    const data = await res.json();
    setTasks([...tasks, data]);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
