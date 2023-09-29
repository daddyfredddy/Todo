import React from "react";
import { FaCheck, FaCircleXmark } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";

function TodoItem({ text }) {
  return (
    <div>
      <div className="icon1">
        <div className="icon2">
          <FaCircleXmark id="cancel" />
          <p className="item">{text}</p>
        </div>
        <div>
          <MdDeleteForever id="trash" />
        </div>
      </div>

      <div>{/* <FaCheck id="check" /> */}</div>
      <div id="line"></div>
    </div>
  );
}

export default TodoItem;
