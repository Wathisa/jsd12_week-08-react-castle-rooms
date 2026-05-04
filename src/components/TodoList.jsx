import { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    if (inputValue.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInputValue("");
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleToggleTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }

      return todo;
    });

    setTodos(updatedTodos);
  };

  return (
    <div className="w-full mx-auto rounded-3xl border border-slate-800 bg-slate-900/80 p-8 text-white">
      <h1 className="mb-6 text-center text-3xl font-bold">Todo List</h1>

      <div className="flex gap-3">
        <input
          type="text"
          placeholder="Add a new task..."
          className="flex-1 rounded-xl bg-slate-800 px-4 py-3 outline-none"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleAddTodo();
            }
          }}
        />

        <button
          onClick={handleAddTodo}
          className="rounded-xl bg-yellow-400 px-5 py-3 font-bold text-slate-950"
        >
          Add
        </button>
      </div>
      <div className="mt-6 space-y-3">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="flex items-center justify-between rounded-xl bg-slate-800 px-4 py-3"
          >
            <span
              onClick={() => handleToggleTodo(todo.id)}
              className={`cursor-pointer ${
                todo.completed ? "text-slate-500 line-through" : "text-white"
              }`}
            >
              {todo.text}
            </span>

            <button
              onClick={() => handleDeleteTodo(todo.id)}
              className="text-red-400"
            >
              Delete
            </button>
          </div>
        ))}
        <div className="mt-6 text-center text-sm text-slate-400">
          Total: {todos.length} | Done:{" "}
          {todos.filter((todo) => todo.completed).length}
        </div>
      </div>
    </div>
  );
}
