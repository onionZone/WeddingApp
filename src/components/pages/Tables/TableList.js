import React from "react";

export default function TableList(props) {
  return (
    <div onClick={() => props.addTable()}>
      <span>ADD TABLE</span>
      <svg height="100" width="100">
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="black"
          stroke-width="2"
          fill="white"
        />
      </svg>
    </div>
  );
}
