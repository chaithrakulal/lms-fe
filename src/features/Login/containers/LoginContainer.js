import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../components/Login";
import { ApiHanlder } from "../constants/ApiHandler";
import { NotificationManager } from "react-notifications";

export default function LoginContainer() {
  const navigate = useNavigate();
  const [formEle, setFormEle] = useState({});

  const handleSubmit = async () => {
    if (!validate()) return;
    const response = await ApiHanlder.authenticateLogin(
      formEle?.username,
      formEle?.password
    );
    if (response.data.length !== 0) {
      sessionStorage.setItem("userInfo", JSON.stringify(response?.data));
      navigate("/home/applyleave");
    } else
      NotificationManager.warning("Invalid username and password", "", 2000);
  };

  const validate = () => {
    var formValid = true;
    if (formEle?.username === undefined) {
      NotificationManager.warning("Please enter a valid username", "", 2000);
      formValid = false;
    }
    if (formEle?.password === undefined) {
      NotificationManager.warning("Please enter a valid password", "", 2000);
      formValid = false;
    }
    return formValid;
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
