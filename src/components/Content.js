//Import libraliers
import React from "react";
import { Routes, Route } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
//
import HomePage from "./pages/HomePage";
import BudgetPage from "./pages/BudgetPage";
import GuestsPage from "./pages/GuestsPage";
import TablesPage from "./pages/TablesPage";
import CalendarPage from "./pages/CalendarPage";

export default function Content() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route path="/budget" element={<BudgetPage />}></Route>
        <Route path="/guests" element={<GuestsPage />}></Route>
        <Route
          path="/layout"
          element={
            <DndProvider backend={HTML5Backend}>
              <TablesPage />
            </DndProvider>
          }
        ></Route>
        <Route path="/calendar" element={<CalendarPage />}></Route>
      </Routes>
    </>
  );
}
