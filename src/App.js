import logo from "./logo.svg";
import "./App.css";
import Pagination from "./component/Pagination";
import { Route, Routes } from "react-router";
import Page from "./component/Page";

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Routes>
        <Route path="/page/:id" element={<Page />}></Route>
      </Routes>
      <Pagination />
    </div>
  );
}

export default App;
