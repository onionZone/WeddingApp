import React from "react";
import logo from "../images/logo.svg";

import "../layouts/Header.css";

export default function Header() {
  return (
    <div>
      <img className="logo" src={logo} alt="Logo" />
    </div>
  );
}
