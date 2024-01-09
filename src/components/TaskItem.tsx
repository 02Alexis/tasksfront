import { useTasks } from "../context/useTasks";
import { Task } from "../interfaces/task.interface";

interface Props {
  task: Task;
}

function TaskItem({ task }: Props) {
  const { deleteTask } = useTasks();
  return (
    <div
      key={task._id}
      className="
            bg-gray-900
            p-2
            my-2
            flex
            justify-between
            hover:bg-gray-800
            hover:cursor-pointer
            "
    >
      <div>
        <h1>{task.title}</h1>
        <p>{task.description}</p>
      </div>
      <div className="flex gap-x-2">
        <button>Actualizar</button>
        <button
          onClick={async () => {
            if (!window.confirm("¿Estas seguro de querer eliminar esta tarea?"))
              return;
            await deleteTask(task._id);
          }}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
