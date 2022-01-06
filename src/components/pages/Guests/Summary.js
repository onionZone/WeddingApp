import React from "react";

export default function Summary(props) {
  const guests = props.guests;

  const overall = guests.length;
  const overnight = guests.filter((guest) => guest.overnight).length;
  const adult = guests.filter((guest) => guest.adult).length;
  const children = guests.filter((guest) => !guest.adult).length;
  return (
    <div className="wraper">
      <div>
        <span>Staying overnight:</span>
        <span>{overnight}</span>
      </div>
      <div>
        <span>Adults:</span>
        <span>{adult}</span>
      </div>
      <div>
        <span>Childrens:</span>
        <span>{children}</span>
      </div>
      <hr></hr>
      <div>
        <span>
          <strong>Overall:</strong>
        </span>
        <span>
          <strong>{overall}</strong>
        </span>
      </div>
    </div>
  );
}
