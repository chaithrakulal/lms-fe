import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../components/Login";
import { ApiHanlder } from "../constants/ApiHandler";

export default function LoginContainer() {
  const navigate = useNavigate();

  const [formEle, setFormEle] = useState({});

  const handleSubmit = async (event) => {
    if (formEle.username === "") alert("please enter your username");
    else if (formEle.password === "") alert("Please enter your password");
    else {
      const response = await ApiHanlder.authenticateLogin(
        formEle?.username,
        formEle?.password
      );
      console.log("response", response);
      // let abc = Users?.find(
      //   (user) =>
      //     user.username === formEle?.username &&
      //     user.password === formEle?.password
      // );
      if (response) navigate("/home");
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
