import React from "react";
import "../SCSS/styles.css";
import holidayPdf from "../../../../features/Assets/PDFs/Holiday_Schedule _2022.pdf";
export default function Holiday() {
  return (
    <div className="holidays">
      <object data={holidayPdf} width="800" height="600" />
    </div>
  );
}
