import React from "react";
import images from "../../../Imagevariables";
import "../SCSS/styles.css";
import { NavLink, Outlet } from "react-router-dom";
export default function MenuBar() {
  return (
    <div className="menu-bar-wrapper">
      <div className="menu-bar-icon-container">
        <NavLink to="/">
          <img className="login-img" src={images.updaptIcon} alt="Login-img" />
        </NavLink>
      </div>

      <div className="menu-bar-list-container">
        <div className="menu-bar-list-content">
          <NavLink to="/home/applyleave" className="active">
            APPLY LEAVE
          </NavLink>
        </div>
        <div className="menu-bar-list-content">
          <NavLink to="/home/holiday">HOLIDAY</NavLink>
        </div>
        <div className="menu-bar-list-content">
          <NavLink to="/home/leavestatus">STATUS</NavLink>
        </div>
      </div>
      <div className="menu-bar-profile-container">
        <NavLink to="/">Logout</NavLink>
      </div>
    </div>
  );
}
