import React from "react";

function FilterNav({ filterHandler }) {
  return (
    <div className="nav">
      <button className="btn2" onClick={() => filterHandler("all")}>
        All
      </button>
      <button className="btn2" onClick={() => filterHandler("active")}>
        Active
      </button>
      <button className="btn2" onClick={() => filterHandler("complete")}>
        Completed
      </button>
    </div>
  );
}

export default FilterNav;
