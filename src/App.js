import React, { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Axios from "axios";

import Login from "./features/Login";
import Home from "./features/Home";

import ApplyLeave from "./features/Home/ApplyLeave";
import Holiday from "./features/Home/Holiday";
import LeaveStatus from "./features/Home/LeaveStatus";

function App() {
  const [data, setData] = useState();
  const getData = async () => {
    const response = await Axios.get("http://localhost:5000/");
    setData(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log("Backend data", data);
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
