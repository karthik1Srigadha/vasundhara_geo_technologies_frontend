const TodoItem = ({ task, toggleComplete, deleteTask }) => {
  return (
    <div className="flex justify-between items-center border p-2 mb-1">
      <span
        onClick={() => toggleComplete(task.id)}
        className={`cursor-pointer ${task.completed && "line-through text-gray-500"}`}
      >
        {task.text} ({task.priority})
      </span>

      <button
        onClick={() => deleteTask(task.id)}
        className="text-red-500"
      >
        ❌
      </button>
    </div>
  );
};

export default TodoItem;
