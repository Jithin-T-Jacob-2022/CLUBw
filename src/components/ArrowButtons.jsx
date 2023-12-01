import React from "react";
import left from "../assets/left.png";
import right from "../assets/right.png";

const ArrowButtons = ({ changeBackground }) => {
  return (
    <div className="flex gap-1">
      <button onClick={() => changeBackground("left")}>
        <img
          src={left}
          alt="left"
          className="w-[70px] bg-black hover:bg-slate-800 rounded-s-10 rounded-e-10"
        />
      </button>
      <button onClick={() => changeBackground("right")}>
        <img
          src={right}
          alt="right"
          className="w-[70px] bg-black hover:bg-slate-800 rounded-s-10 rounded-e-10"
        />
      </button>
    </div>
  );
};

export default ArrowButtons;
