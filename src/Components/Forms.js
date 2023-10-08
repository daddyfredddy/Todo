import React, { useState } from "react";

function Forms({ addHandler }) {
  const [userInput, setUserInput] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    addHandler(userInput);
    setUserInput("");
  };

  return (
    <div>
      <form onSubmit={handleForm}>
        <div className="itemForm">
          <input
            type="text"
            name="TodoItem"
            onChange={(e) => setUserInput(e.target.value)}
            value={userInput}
            required
            id="item"
            placeholder="Create New ToDo Item"
          />
          <button type="submit" className="btn">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default Forms;
