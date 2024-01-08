import { useContext } from "react";
import { TaskContext } from "./TaskContext";

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context)
    throw new Error("useTask debe usarse dentro de un TaskProvider");
  return context;
};
