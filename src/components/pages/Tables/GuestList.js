import React from "react";
import Guest from "./Guest";

export default function GuestList(props) {
  const guests = props.guests.map((guest) => (
    <Guest key={guest.id} guest={guest} addGuest={props.addGuest} />
  ));
  return <ul>{guests}</ul>;
}
