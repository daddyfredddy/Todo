import React from "react";
import { FaCheck, FaCircleXmark } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";

function TodoItem({ todoData, deleteItem, statusUpdate }) {
  return (
    <div>
      <div className="icon1">
        <div className="icon2">
          {todoData.status ? (
            <FaCheck onClick={() => statusUpdate(todoData.id)} id="check" />
          ) : (
            <FaCircleXmark
              onClick={() => statusUpdate(todoData.id)}
              id="cancel"
            />
          )}
          <p className={`${todoData.status && "item"}`}>{todoData.text}</p>
        </div>
        <div>
          <MdDeleteForever onClick={() => deleteItem(todoData.id)} id="trash" />
        </div>
      </div>

      {/* <div></div> */}
      <div id="line"></div>
    </div>
  );
}

export default TodoItem;
