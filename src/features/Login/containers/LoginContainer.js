import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../components/Login";

export default function LoginContainer() {
  const Users = [
    { username: "user1", password: "1234" },
    { username: "John123", password: "John@123" },
  ];

  const navigate = useNavigate();
  const [formEle, setFormEle] = useState({});

  const handleSubmit = (event) => {
    if (formEle.username === "") alert("please enter your username");
    else if (formEle.password === "") alert("Please enter your password");
    else {
      let abc = Users?.find(
        (user) =>
          user.username === formEle?.username &&
          user.password === formEle?.password
      );
      if (abc) navigate("/home");
      else alert("Invalid username and password");
    }
  };

  const handleEleChange = (e, type) => {
    formEle[type] = e.target.value;
    setFormEle({ ...formEle });
  };

  return (
    <Login
      handleSubmit={handleSubmit}
      handleEleChange={handleEleChange}
      formEle={formEle}
    />
  );
}
