import React from "react";
import { useNavigate } from "react-router";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/html")}>HTML</button>

      <button onClick={() => navigate("/css")}>CSS</button>

      <button onClick={() => navigate("/javascript")}>JAVASCRIPT</button>

      <button onClick={() => navigate("/bootstrap")}>BOOTSTRAP</button>

      <button onClick={() => navigate("/react")}>REACT</button>
    </div>
  );
}
