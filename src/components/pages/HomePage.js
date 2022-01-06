import React from "react";
import Logo from "./Home/Logo";

import "../../layouts/Home.css";

export default function Start() {
  return (
    <div className="home">
      <Logo />
      <button className="add-button">GET START</button>
    </div>
  );
}
