import React, { useState } from "react";
import logo from "../../images/logo.svg";
import RoundTable from "./Tables/RoundTable";

export default function TableLayout() {
  const [state, setstate] = useState([]);

  let counter = state.length;

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDrop = (e) => {
    counter++;
    setstate(state.push(counter));
  };

  return (
    <div className="page">
      <div className="container">
        <div draggable>
          <RoundTable />
        </div>
      </div>
      <div
        className="container"
        onDragOver={(e) => {
          onDragOver(e);
        }}
        onDrop={(e) => {
          onDrop(e);
        }}
      >
        {state}
      </div>
    </div>
  );
}
