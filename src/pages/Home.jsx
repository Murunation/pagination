import React from "react";
import { Outlet } from "react-router";
import Navbar from "../component/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
