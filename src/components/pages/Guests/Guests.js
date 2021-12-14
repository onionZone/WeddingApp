import React from "react";
import Guest from "./Guest";

export default function Guests(props) {
  const guests = props.guests.map((guest) => (
    <Guest key={guest.id} guest={guest} />
  ));
  return (
    <table className="guests">
      <caption>Guest List:</caption>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Last Name</th>
          <th>Phone</th>
          <th>Adult</th>
          <th>Overnight</th>
          <th>Invited</th>
          <th>Confirmed</th>
        </tr>
      </thead>
      <tbody>{guests}</tbody>
    </table>
  );
}
