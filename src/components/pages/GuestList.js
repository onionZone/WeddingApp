import { React, useState } from "react";
import Guests from "./Guests/Guests.js";

export default function GuestList() {
  const [guests, setGuests] = useState([
    {
      id: 0,
      forname: "Jan",
      lastname: "Kowalski",
      phone: "669988600",
      adult: true,
      overnight: true,
      invited: true,
      confirmed: true,
    },
    {
      id: 1,
      forname: "Ania",
      lastname: "Kowalski",
      phone: "669988600",
      adult: true,
      overnight: true,
      invited: true,
      confirmed: true,
    },
  ]);

  return (
    <div>
      <Guests
        guests={guests}
        //delete={deleteGuest}
        //change={changeGuestStatus}
      />
    </div>
  );
}
