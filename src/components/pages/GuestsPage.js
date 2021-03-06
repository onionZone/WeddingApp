import { React, useState, useEffect } from "react";
import Guests from "./Guests/Guests.js";
import Summary from "./Guests/Summary.js";
import "../../layouts/Guest.css";

export default function GuestsPage() {
  /*
   * Guests state hook
   */
  const [guests, setGuests] = useState([]);

  /*
   * Load data from file guests.js
   */
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("http://localhost:3000/guests.json");
      const data = await result.json();
      setGuests(data.guests);
    };
    fetchData();
  }, [setGuests]);

  let idCounter = guests.length + 1;

  /*
   * Delete guest. Paramter - id number of guest
   */
  const deleteGuest = (id) => {
    setGuests(guests.filter((guest) => guest.id !== id));
    console.log("Deleted guest: " + id);
  };

  /*
   * Change guest props. Paramter - object guest
   */
  const changeGuest = (guest) => {
    let _guests = [...guests];

    _guests.map((_guest) => {
      if (_guest.id === guest.id) {
        _guest = guest;
      }
      return _guest;
    });

    setGuests(_guests);
    console.log("Changed guest: " + guest.id);
  };

  /*
   * Add new default guest.
   */
  const addGuest = () => {
    const defaultGuest = {
      id: idCounter,
      forname: "",
      lastname: "",
      phone: "",
      adult: false,
      overnight: false,
      invited: false,
      confirmed: false,
    };

    setGuests((prev) => [...prev, defaultGuest]);

    idCounter++;

    console.log("Guest add");
  };

  /*
   * Sort guest by property name. Paremter - property(name, forname, id etc. ), is reverse ?
   */
  const sortingGuests = (name, reverse) => {
    let _guests = [...guests];

    if (!reverse) {
      _guests.sort((a, b) => {
        if (a[name] > b[name]) {
          return 1;
        }
        if (a[name] < b[name]) {
          return -1;
        }
        if ((a[name] = b[name])) {
          return 0;
        }
      });
    } else {
      _guests = _guests.reverse();
    }

    setGuests(_guests);
  };

  return (
    <section>
      {guests && (
        <Guests
          guests={guests}
          delete={deleteGuest}
          change={changeGuest}
          add={addGuest}
          sorting={sortingGuests}
        />
      )}

      <Summary guests={guests} />
    </section>
  );
}
