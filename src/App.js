import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Login from "./features/Login";
import Home from "./features/Home";

import ApplyLeave from "./features/Home/ApplyLeave";
import Holiday from "./features/Home/Holiday";
import LeaveStatus from "./features/Home/LeaveStatus";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="home" element={<Home />}>
          <Route path="applyleave" element={<ApplyLeave />} />
          <Route path="holiday" element={<Holiday />} />
          <Route path="leavestatus" element={<LeaveStatus />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
