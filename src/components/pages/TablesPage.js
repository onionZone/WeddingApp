import React, { useState, useEffect } from "react";
import { useDrop } from "react-dnd";
import Table from "./Tables/Table";
import TableList from "./Tables/TableList";
import GuestList from "./Tables/GuestList";

import "../../layouts/Tables.css";

export default function TableLayout() {
  const [tables, setTables] = useState([
    {
      id: 0,
      type: "round",
      left: 0,
      top: 0,
      chairs: [
        {
          id: 0,
          active: false,
          guest: null,
        },
        {
          id: 1,
          active: false,
          guest: null,
        },
      ],
    },
  ]);

  const [guests, setGuests] = useState([]);

  const [active, setActive] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("http://localhost:3000/guests.json");
      const data = await result.json();
      setGuests(data.guests);
    };
    fetchData();
  }, [setGuests]);

  let idCounter = tables.length + 1;

  const moveTable = (id, left, top) => {
    let _tables = [...tables];

    _tables.map((table) => {
      if (table.id === id) {
        table.left = left;
        table.top = top;
      }
    });

    setTables(_tables);
  };

  const addTable = () => {
    const defaultTable = {
      id: tables.length + 1,
      type: "round",
      left: 0,
      top: 0,
      chairs: [
        {
          id: 0,
          active: false,
          guest: null,
        },
        {
          id: 1,
          active: false,
          guest: null,
        },
        {
          id: 2,
          active: false,
          guest: null,
        },
        {
          id: 3,
          active: false,
          guest: null,
        },
      ],
    };

    setTables((prev) => [...prev, defaultTable]);
    idCounter++;
  };

  const removeTable = (id) => {
    let _tables = [...tables];
    setTables(_tables.filter((table) => table.id !== id));
  };

  const addChair = (tableID) => {
    let _tables = [...tables];

    _tables.map((table) => {
      if (table.id === tableID) {
        const defaultChair = {
          id: table.chairs.length,
          active: false,
          guest: null,
        };

        table.chairs.push(defaultChair);
        console.log(table.chairs);
      }
    });

    setTables(_tables);
  };

  const removeChair = (tableID) => {
    let _tables = [...tables];

    _tables.map((table) => {
      if (table.id === tableID) {
        table.chairs.pop();
      }
      console.log(table.chairs);
    });

    setTables(_tables);
  };

  const activeChair = (tableID, chairID, e) => {
    e.stopPropagation();

    let _tables = [...tables];

    _tables.map((table) => {
      if (table.id === tableID) {
        table.chairs.map((chair) => {
          if (chair.id === chairID) {
            chair.active = true;
          } else {
            chair.active = false;
          }
        });
      }
    });

    setActive(true);
    setTables(_tables);
  };

  const deactiveChair = () => {
    let _tables = [...tables];

    _tables.map((table) => {
      table.chairs.map((chair) => {
        chair.active = false;
      });
    });

    setActive(false);
    setTables(_tables);
  };

  const addGuest = (guest) => {
    let _tables = [...tables];

    _tables.map((table) => {
      table.chairs.map((chair) => {
        if (chair.active === true) {
          chair.guest = guest;
        }
      });
    });
    deactiveChair();
    setTables(_tables);
  };

  const [, drop] = useDrop(
    () => ({
      accept: "table",
      drop(item, monitor) {
        const delta = monitor.getDifferenceFromInitialOffset();
        const left = Math.round(item.left + delta.x);
        const top = Math.round(item.top + delta.y);
        moveTable(item.id, left, top);
        return undefined;
      },
    }),
    [moveTable]
  );

  return (
    <section>
      <div className="tables">
        <TableList addTable={addTable} />
      </div>
      <div className="container">
        <div className="drop-box" ref={drop} onClick={deactiveChair}>
          {tables.map((table) => (
            <Table
              key={table.id}
              table={table}
              removeTable={removeTable}
              addChair={addChair}
              removeChair={removeChair}
              activeChair={activeChair}
            />
          ))}
        </div>
      </div>
      {active && (
        <div className="guests">
          <GuestList guests={guests} addGuest={addGuest} />
        </div>
      )}
    </section>
  );
}
