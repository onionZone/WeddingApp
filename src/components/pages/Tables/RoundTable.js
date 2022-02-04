import { getNodeText } from "@testing-library/react";
import React from "react";

export default function RoundTable(props) {
  const addChair = props.addChair;
  const removeChair = props.removeChair;
  const removeTable = props.removeTable;
  //Number of chairs
  const chairs = props.chairs;

  const id = props.id;
  //Size of the svg box (width, and height)
  const size = chairs.length * 20 + 110;
  //Distance betwween big and small circle
  const distance = 10;
  //Radius of small circle (chairs)
  const r = 20;
  //Radius of big circle (table). Depends of number of chairs
  const R = chairs.length * 10;
  //co
  const active = props.active;

  //Generate table
  const centralCircle = (
    <>
      <circle
        cx={size / 2}
        cy={size / 2}
        r={R}
        stroke="black"
        strokeWidth="2"
        fill="white"
        onClick={() => console.log("click")}
      />
      <text
        x={size / 2 - 35}
        y={size / 2 + 15}
        fontSize={"30pt"}
        fontFamily={"Louis George Café Light"}
        fill={"#000000"}
        onClick={() => addChair(id)}
      >
        +
      </text>
      <text
        x={size / 2 + 20}
        y={size / 2 + 15}
        fontSize={"30pt"}
        fontFamily={"Louis George Café Light"}
        fill={"#000000"}
        onClick={() => removeChair(id)}
      >
        -
      </text>
      <path
        x={size * 0.7}
        y={size * 0.7}
        d="M9 3h6v-1.75c0-.066-.026-.13-.073-.177-.047-.047-.111-.073-.177-.073h-5.5c-.066 0-.13.026-.177.073-.047.047-.073.111-.073.177v1.75zm11 1h-16v18c0 .552.448 1 1 1h14c.552 0 1-.448 1-1v-18zm-10 3.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5v12c0 .276.224.5.5.5s.5-.224.5-.5v-12zm5 0c0-.276-.224-.5-.5-.5s-.5.224-.5.5v12c0 .276.224.5.5.5s.5-.224.5-.5v-12zm8-4.5v1h-2v18c0 1.105-.895 2-2 2h-14c-1.105 0-2-.895-2-2v-18h-2v-1h7v-2c0-.552.448-1 1-1h6c.552 0 1 .448 1 1v2h7z"
        onClick={() => removeTable(id)}
      />
    </>
  );

  //Generate chairs
  const sateliteCircles = chairs.map((chair) => {
    let angle = ((360 / chairs.length) * chair.id * Math.PI) / 180;
    let cx = (r + R + distance) * Math.cos(angle) + size / 2;
    let cy = (r + R + distance) * Math.sin(angle) + size / 2;
    let text =
      chair.guest !== null
        ? chair.guest.forname.substring(0, 1) +
          chair.guest.lastname.substring(0, 1)
        : "";

    return (
      <g onClick={(e) => props.activeChair(id, chair.id, e)}>
        <circle
          cx={cx}
          cy={cy}
          r={r}
          stroke="black"
          strokeWidth="2"
          fill={chair.active ? "#005544" : "#ffffff"}
        />
        <text
          text-anchor="middle"
          x={cx}
          y={cy + 8}
          fontSize={"16pt"}
          fontFamily={"Open Sans"}
          fill={chair.active ? "#ffffff" : "#000000"}
        >
          {text}
        </text>
      </g>
    );
  });

  return (
    <svg height={size} width={size}>
      {centralCircle}
      {sateliteCircles}
    </svg>
  );
}
