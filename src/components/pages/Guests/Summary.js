import React from "react";

export default function Summary(props) {
  const guests = props.guests;

  const overall = guests.length;
  const overnight = guests.filter((guest) => guest.overnight).length;
  const adult = guests.filter((guest) => guest.adult).length;
  const children = guests.filter((guest) => !guest.adult).length;
  const invited = guests.filter((guest) => guest.invited).length;
  const confirmed = guests.filter((guest) => guest.invited).length;

  return (
    <div className="summary">
      <h4>Staying overnight:</h4>
      <h1>
        {overnight} / {overall}
      </h1>
      <h4>Adults:</h4>
      <h1>
        {adult} / {overall}
      </h1>
      <h4>Childrens:</h4>
      <h1>
        {children} / {overall}
      </h1>
      <h4>Invited:</h4>
      <h1>
        {invited} / {overall}
      </h1>
      <h4>Confirmed:</h4>
      <h1>
        {confirmed} / {overall}
      </h1>
    </div>
  );
}
