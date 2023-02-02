import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/page.css";
import PageButton from "./PageButton";

const PageNumbers = 400;
export default function Pagination({ buttonName, buttonClass }) {
  const [currentPage, setCurrentPage] = useState(2);
  return (
    <div className="main-pagination">
      <Link
        to={`page/${currentPage - 1}`}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        <PageButton buttonName={currentPage - 1} buttonClass={"pageButton"} />
      </Link>
      <span>
        <PageButton buttonName={currentPage} buttonClass={"button-active"} />
      </span>
      <Link
        to={`page/${currentPage + 1}`}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        <PageButton buttonName={currentPage + 1} buttonClass={"pageButton"} />
      </Link>
    </div>
  );
}
// buttonName={"1"} buttonClass={"button-active"}
