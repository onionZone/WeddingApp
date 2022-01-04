import React from "react";

import "../../layouts/Home.css";

import logoBig from "../../images/logo_big.svg";

export default function Start() {
  return (
    <div className="home">
      <img className="logo-big" src={logoBig} alt="Big Logo" />
      <button className="home-button">GET START</button>
    </div>
  );
}
