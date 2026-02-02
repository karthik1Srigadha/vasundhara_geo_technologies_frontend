import { useState } from "react";
import TodoItem from "./TodoItem";
import FilterControls from "./TodoFilterControls";
import useLocalStorage from "../../hooks/useLocalStorage";

const TodoApp = () => {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("Low");
  const [filter, setFilter] = useState("all");

  const addTask = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        text,
        completed: false,
        priority,
      },
    ]);
    setText("");
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(t =>
      t.id === id ? { ...t, completed: !t.completed } : t
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const filteredTasks = tasks.filter(t => {
    if (filter === "active") return !t.completed;
    if (filter === "completed") return t.completed;
    return true;
  });

  return (
    <div className="border p-4 rounded">
      <h2 className="text-xl font-bold mb-2">Todo App</h2>

      <form onSubmit={addTask} className="flex gap-2 mb-3">
        <input
          className="border p-1 flex-1"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter task"
        />
        <select
          className="border p-1"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
        <button className="bg-blue-500 text-white px-3">Add</button>
      </form>

      <FilterControls filter={filter} setFilter={setFilter} />

      {filteredTasks.map(task => (
        <TodoItem
          key={task.id}
          task={task}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};

export default TodoApp;
