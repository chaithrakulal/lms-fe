import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./features/Login";
import Home from "./features/Home";
import Axios from "axios";

function App() {
  const [data, setData] = useState();
  const getData = async () => {
    const response = await Axios.get("http://localhost:5000/");
    setData(response.data);

    // const respons = await Axios.get("http://localhost:5000/getData");
    //   setData(response.data);
  };

  useEffect(() => {
    getData();
  }, []);
  console.log("Backend data", data);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
