import React from "react";
import "../SCSS/login.css";
import images from "../../Imagevariables";

function Login({ handleSubmit, handleEleChange, formEle }) {
  return (
    <>
      <div className="login-container-outer-wrapper">
        <div className="login-container-img-wrapper">
          <img
            className="login-img"
            src={images.loginImage}
            alt="updapt-logo"
          />
        </div>
        <div className="login-container-content-wrapper">
          <div className="login-container-inner-wrapper">
            <div className="login-container-heading">
              <h1 className="login-container-heading-content">
                Leave Management System
              </h1>
            </div>
            <div className="login-container-form-title">
              <h3 className="form-title">Login</h3>
            </div>

            <form className="login-container-form">
              {/* <div className="login-container-form-wrapper"> */}
              <div className="login-form-username-container">
                <label className="form-label">Username</label>
                <div className="input-wrapper">
                  <img
                    className="form-input-icon"
                    src={images.mailImage}
                    alt="mail-img"
                  />
                  <input
                    className="form-textbox"
                    onChange={(e) => {
                      handleEleChange(e, "username");
                    }}
                    type="text"
                    value={formEle.username}
                    name="username"
                    placeholder="John123"
                  />
                </div>
              </div>
              <div className="login-form-password-container">
                <label className="form-label">Password</label>
                <div className="input-wrapper">
                  <img
                    className="form-input-icon"
                    src={images.passwordImage}
                    alt="mail-img"
                  />

                  <input
                    onChange={(e) => {
                      handleEleChange(e, "password");
                    }}
                    type="password"
                    value={formEle.password}
                    placeholder="John@123"
                    className="form-textbox"
                  />
                  <img
                    className="form-input-icon"
                    src={images.eyeClose}
                    alt="mail-img"
                  />
                </div>
              </div>
              <div className="login-form-rememberme-forgot">
                <label className="form-label-remember-me">
                  <input
                    className="form-checkbox-remember-me"
                    type="checkbox"
                  />{" "}
                  Remember me
                </label>
                <div
                  className="login-forgot-password"
                  onClick={() => {
                    alert("password reset");
                  }}
                >
                  Forgot password?
                </div>
              </div>
              <div className="login-form-btn-container">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleSubmit();
                  }}
                  type="submit"
                  className="login-btn"
                >
                  LOG IN
                </button>
              </div>
              {/* </div> */}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
