import React from "react";
import "../SCSS/applyLeave.css";
import { LeaveTypes } from "../../../Constants/LeaveTypes";
export default function ApplyLeave({
  formEle,
  handleEleChange,
  handleSubmitLeave,
}) {
  return (
    <>
      <div className="apply-leave-outer-wrapper">
        <div className="apply-leave-content-wrapper">
          <div className="apply-leave-inner-wrapper">
            <div className="apply-leave-header">Apply Leave</div>
            <div className="apply-leave-body-container">
              <div className="date-wrapper">
                <span>Start Date</span>
                <span className="mandatory-field">*</span>
                <input
                  type="date"
                  value={formEle.startDate}
                  onChange={(e) => {
                    handleEleChange(e, "startDate");
                  }}
                />
              </div>
              <div className="date-wrapper">
                <span>End Date</span>
                <span className="mandatory-field">*</span>
                <input
                  type="date"
                  value={formEle.endDate}
                  onChange={(e) => {
                    handleEleChange(e, "endDate");
                  }}
                />
              </div>

              <div className="date-wrapper">
                <span>Leave Type</span>
                <span className="mandatory-field">*</span>
                <select
                  value={formEle.type}
                  onChange={(e) => {
                    handleEleChange(e, "type");
                  }}
                >
                  <option value="" disabled selected>
                    Please Select
                  </option>
                  {Object.keys(LeaveTypes).map((type, index) => {
                    return (
                      <option key={index} value={type}>
                        {type}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className="date-wrapper">
                <span>Reason </span>
                <span className="mandatory-field">*</span>
                <textarea
                  name="textarea"
                  cols="60"
                  rows="5"
                  value={formEle.reason}
                  onChange={(e) => handleEleChange(e, "reason")}
                />
              </div>
              <div className="button-wrapper">
                <button
                  className="submit-button"
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    handleSubmitLeave();
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
