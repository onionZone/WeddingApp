import React from "react";
import Guest from "./Guest";

let reverse = false;
let lastName = "";

export default function Guests(props) {
  const guests = props.guests.map((guest) => (
    <Guest
      key={guest.id}
      guest={guest}
      delete={props.delete}
      change={props.change}
    />
  ));

  const sortClick = (e) => {
    console.log(lastName);
    const name = e.target.id;

    if (lastName === name) {
      reverse = !reverse;
    } else {
      reverse = false;
    }

    lastName = name;

    props.sorting(name, reverse);
  };

  return (
    <div className="container">
      {props.guests.length > 0 ? (
        <table className="guests">
          <thead>
            <tr>
              <td id="id" onClick={sortClick}>
                #
              </td>
              <td id="forname" onClick={sortClick}>
                Name
              </td>
              <td id="lastname" onClick={sortClick}>
                Last Name
              </td>
              <td id="phone" onClick={sortClick}>
                Phone
              </td>
              <td id="adult" onClick={sortClick}>
                Adult
              </td>
              <td id="overnight" onClick={sortClick}>
                Overnight
              </td>
              <td id="invited" onClick={sortClick}>
                Invited
              </td>
              <td id="confirmed" onClick={sortClick}>
                Confirmed
              </td>
              <td></td>
            </tr>
          </thead>
          <tbody>{guests}</tbody>
        </table>
      ) : (
        <div className="info"> Your guest list is empty</div>
      )}

      <button className="add-button" onClick={() => props.add()}>
        ADD GUEST
      </button>
    </div>
  );
}
