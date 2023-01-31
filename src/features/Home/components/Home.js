import React from "react";
import { Outlet } from "react-router-dom";
import MenuBar from "../MenuBar";

export default function Home() {
  return (
    <>
      <MenuBar />
      <Outlet />
    </>
  );
}
