import React from "react";
import logo from "../images/logo.svg";

import "../styles/Header.css";

export default function Header() {
  return (
    <div>
      <img src={logo} alt="Logo" />
    </div>
  );
}
