import "./App.css";
// import Pagination from "./component/Pagination";
import { Route, Routes } from "react-router";
import Html from "./pages/Html";
import Home from "./pages/Home";
import Javascript from "./pages/Javascript";
import Bootstrap from "./pages/Bootstrap";
import React from "./pages/React";
import Css from "./pages/Css";
import Htmlintro from "./pages/sub/Htmlintro";
import Hbasic from "./pages/sub/Hbasic";

function App() {
  return (
    <div className="App">
      <h1>React router</h1>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/html" element={<Html />}>
            <Route path="intro" element={<Htmlintro />} />
            <Route path="basic" element={<Hbasic />} />
          </Route>
          <Route path="/javascript" element={<Javascript />} />
          <Route path="/bootstrap" element={<Bootstrap />} />
          <Route path="/react" element={<React />} />
          <Route path="/css" element={<Css />} />
        </Route>
      </Routes>
      {/* <Pagination /> */}
    </div>
  );
}

export default App;
