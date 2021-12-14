import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="main">
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/budget">BUDGET</Link>
        </li>
        <li>
          <Link to="/guestlist">GUEST LIST</Link>
        </li>
        <li>
          <Link to="/layout">LAYOUT</Link>
        </li>
        <li>
          <Link to="/layout">CALENDAR</Link>
        </li>
      </ul>
    </nav>
  );
}
