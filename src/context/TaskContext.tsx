import { createContext, useEffect, useState } from "react";
import {
  CreateTaskRequest,
  deleteTaskRequest,
  getTaskRequest,
} from "../api/tasks";
import { CreateTask, Task } from "../interfaces/task.interface";

interface taskContextValue {
  tasks: Task[];
  createTask: (task: CreateTask) => Promise<void>;
  deleteTask: (id: string) => Promise<void>;
}

export const TaskContext = createContext<taskContextValue>({
  tasks: [],
  createTask: async () => {},
  deleteTask: async () => {},
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

  const deleteTask = async (id: string) => {
    const res = await deleteTaskRequest(id);
    if (res.status === 204) {
      setTasks(tasks.filter((task) => task._id !== id));
    }
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        deleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
