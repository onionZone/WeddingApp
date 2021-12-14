//Import libraliers
import React from "react";
import { Routes, Route } from "react-router-dom";
//
import "../styles/Content.css";
//
import Home from "./pages/Home";
import Budget from "./pages/Budget";
import GuestList from "./pages/GuestList";
import TableLayout from "./pages/TableLayout";
import Calendar from "./pages/Calendar";

export default function Content() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route path="/budget" element={<Budget />}></Route>
      <Route path="/guestlist" element={<GuestList />}></Route>
      <Route path="/layout" element={<TableLayout />}></Route>
      <Route path="/calendar" element={<Calendar />}></Route>
    </Routes>
  );
}
