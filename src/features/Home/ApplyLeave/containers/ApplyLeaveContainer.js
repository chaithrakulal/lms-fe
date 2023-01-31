import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ApiHanlder } from "../../../Login/constants/ApiHandler";
import { NotificationManager } from "react-notifications";
import ApplyLeave from "../components/ApplyLeave";
import { globalUserContext } from "../../../contexts/globalUserContext";

export default function ApplyLeaveContainer() {
  const navigate = useNavigate();
  const { userInfo } = useContext(globalUserContext);
  const [formEle, setFormEle] = useState({});
  const handleSubmitLeave = async () => {
    if (!validate()) return;
    const data = {
      userId: userInfo[0]?._id,
      startDate: formEle?.startDate,
      endDate: formEle?.endDate,
      type: formEle?.type,
      reason: formEle?.reason,
    };
    console.log("data", data);
    const response = await ApiHanlder.addLeaveEntry(data);

    response?.length
      ? navigate("/home/applyleave")
      : NotificationManager.warning("Invalid data entered", "", 2000);
  };
  const validate = () => {
    if (formEle.startDate?.length === 0)
      NotificationManager.warning("Please enter the start date", "", 2000);
    else if (formEle.endDate?.length === 0)
      NotificationManager.warning("Please enter the end date", "", 2000);
    else if (formEle.type?.length === 0)
      NotificationManager.warning("Please select the leave type", "", 2000);
    else if (formEle.reason?.length === 0)
      NotificationManager.warning("Please select the reason", "", 2000);
  };
  const handleEleChange = (e, type) => {
    formEle[type] = e.target.value;
    setFormEle({ ...formEle });
  };
  return (
    <ApplyLeave
      formEle={formEle}
      handleEleChange={handleEleChange}
      handleSubmitLeave={handleSubmitLeave}
    />
  );
}
