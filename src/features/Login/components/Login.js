import React from "react";
import "../SCSS/login.css";
import images from "../../Imagevariables";
function Login({ handleSubmit, handleEleChange, formEle }) {
  return (
    <>
      <div className="login-container-outer-wrapper">
        <div className="login-container-img-wrapper">
          <img className="login-img" src={images.loginImage} alt="Login-img" />
        </div>
        <div className="login-container-form-wrapper">
          <div className="login-container-inner-wrapper">
            <h1 className="login-title">LMS</h1>
            <form className="login-form">
              <h3 className="login-title">Login</h3>
              <div className="login-form-username-container">
                <input
                  onChange={(e) => {
                    handleEleChange(e, "username");
                  }}
                  type="text"
                  value={formEle.username}
                  name="username"
                  placeholder="username"
                />
              </div>
              <div className="login-form-password-container">
                <input
                  onChange={(e) => {
                    handleEleChange(e, "password");
                  }}
                  type="password"
                  value={formEle.password}
                  placeholder="password"
                />
              </div>
              <div className="login-form-btn-container">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleSubmit();
                  }}
                  type="submit"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
