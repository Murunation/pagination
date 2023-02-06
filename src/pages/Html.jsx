import React from "react";
import { Outlet, useNavigate } from "react-router";

export default function Html() {
  const navigate = useNavigate();
  return (
    <div>
      <ul>
        <li>
          <button onClick={() => navigate("intro")}>HTML Intro</button>
        </li>
        <li>
          <button onClick={() => navigate("basic")}>HTML Basic</button>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
