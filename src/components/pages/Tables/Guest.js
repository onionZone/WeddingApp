import React from "react";

export default function Guest(props) {
  const addGuest = props.addGuest;
  const guest = props.guest;
  const forname = props.guest.forname;
  const lastname = props.guest.lastname;
  return (
    <li onClick={() => addGuest(guest)}>
      {forname} {lastname}
    </li>
  );
}
