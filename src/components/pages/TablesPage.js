import React, { useState } from "react";
import DropBox from "./Tables/DropBox";
import RoundTable from "./Tables/RoundTable";

export default function TableLayout() {

  const [layout, setLayout] = useState([{
    table: 0,
    chairs: 0,
    x: 0,
    y: 0,
  }])

  layout.map{}
  return (
    <div className="page">
      <RoundTable />
      <DropBox />
    </div>
  );
}
