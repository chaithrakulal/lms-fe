import React from "react";
import "../SCSS/styles.css";
import holidayPdf from "../../../../features/Assets/PDFs/Holiday_Schedule _2023.pdf";
import images from "../../../Imagevariables";
export default function Holiday() {
  return (
    <div className="holidays">
      {/* <object data={holidayPdf} width="800" height="600" /> */}
      <img className="holiday-image" src={images?.holiDayList} />
    </div>
  );
}
