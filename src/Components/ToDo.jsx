import React, { useState } from "react";

function ToDo() {
  const [task, setTask] = useState([]);
  const [input, setInput] = useState("");

  function addTask() {
    if (input.trim() !== "") {
      const newTask = [...task, input.trim()];
      setTask(newTask);
      setInput("");
    }
  }

  function deleteTask(index) {
    const deletedTask = task.filter((_, i) => i !== index);
    setTask(deletedTask);
  }

  return (
    <main className="flex gap-4 flex-col min-h-screen items-center p-4">
      <h1 className="text-gray-400 font-bold text-4xl">To Do App</h1>
      <div className="flex gap-4 flex-row">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border-2 border-gray-400 rounded-lg p-2"
          placeholder="Add a new task"
        />
        <button
          className="bg-blue-500 text-white p-2 rounded"
          onClick={addTask}
        >
          Add Task
        </button>
      </div>
      <ul className="list-disc mt-4">
        {task.map((task, index) => (
          <li key={index} className="flex justify-between items-center gap-4">
            <span>{task}</span>
            <button
              onClick={() => deleteTask(index)}
              className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default ToDo;
