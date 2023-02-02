import React from "react";
import { useParams } from "react-router";

export default function Page() {
  const pageID = useParams();
  console.log(pageID.id);
  return <div>Page {pageID.id}</div>;
}
