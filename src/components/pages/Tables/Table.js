import React from "react";
import { useDrag } from "react-dnd";
import RoundTable from "./RoundTable";
import RectTable from "./RectTable";

export default function Table(props) {
  const style = {
    position: "absolute",
    cursor: "move",
    transform: "translate(0, 0)",
    display: "block",
    textAlign: "center",
  };
  const removeTable = props.removeTable;
  const addChair = props.addChair;
  const removeChair = props.removeChair;
  const activeChair = props.activeChair;
  const { id, type, left, top, chairs } = props.table;

  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: "table",
      item: { id, left, top },
      collect: (monitor) => ({
        item: monitor.getItem(),
        isDragging: !!monitor.isDragging(),
      }),
    }),
    [id, left, top]
  );

  const switchType = () => {
    switch (type) {
      case "round":
        return (
          <RoundTable
            id={id}
            chairs={chairs}
            removeTable={removeTable}
            activeChair={activeChair}
            addChair={addChair}
            removeChair={removeChair}
          />
        );
      case "rect":
        return <RectTable />;
      default:
        return undefined;
    }
  };

  return (
    <div ref={drag} style={{ ...style, left, top }}>
      {switchType()}
    </div>
  );
}
