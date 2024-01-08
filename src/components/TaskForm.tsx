import { ChangeEvent, FormEvent, useState } from "react";

function TaskForm() {
  const [task, setTask] = useState({
    title: "",
    description: "",
    done: false,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setTask({ ...task, [e.target.name]: e.target.value });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(task);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          className="
            border-2
            border-gray-700
            p-2
            rounded-lg
            bg-zinc-800
            block w-full my-2
        "
          placeholder="Escribe un titulo"
          onChange={handleChange}
        />
        <textarea
          name="description"
          rows={3}
          className="
            border-2
            border-gray-700
            p-2
            rounded-lg
            bg-zinc-800
            block w-full my-2
        "
          placeholder="Escribe una descripcion"
          onChange={handleChange}
        ></textarea>
        <label htmlFor="" className="inline-flex items-center gap-x-2">
          <input
            type="checkbox"
            className="
                h-5 
                w-5 
                text-indigo-600            
            "
            onChange={(e) => setTask({ ...task, done: !task.done })}
          />
          <span>Hecho</span>
        </label>
        <button
          className="
                bg-indigo-500
                px-3
                block
                py-2
                w-full
            "
        >
          Guardar
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
