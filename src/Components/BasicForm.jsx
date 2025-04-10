import React, { useState } from "react";

function Form() {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Input Submitted:", input);
    setInput(""); // Clear the input field after submission
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
      <h1 className="text-2xl font-bold">Basic Form</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter something..."
        className="border p-2 rounded"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
}

export default Form;
