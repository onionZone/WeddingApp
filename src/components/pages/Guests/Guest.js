import React from "react";

export default function Guest(props) {
  const { id, forname, lastname, phone, adult, overnight, invited, confirmed } =
    props.guest;
  return (
    <tr>
      <td>{id}</td>
      <td>{forname}</td>
      <td>{lastname}</td>
      <td>{phone}</td>
      <td>
        {adult}
        <input type="checkbox" />
      </td>
      <td>
        {overnight}
        <input type="checkbox" />
      </td>
      <td>
        {invited}
        <input type="checkbox" />
      </td>
      <td>
        {confirmed}
        <input type="checkbox" />
      </td>
    </tr>
  );
}
