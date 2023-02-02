import React from "react";
import "../styles/pageBtn.css";

export default function PageButton({ buttonName, buttonClass }) {
  return <button className={buttonClass}>{buttonName}</button>;
}
