import React from "react";

function Forms() {
  return (
    <div>
      <form>
        <div className="itemForm">
          <input type="text" id="item" placeholder="Create New ToDo Item" />
          <button className="btn">Add</button>
        </div>
      </form>
    </div>
  );
}

export default Forms;
