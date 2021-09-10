import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ExportWorkBook from "./App";
import { allData } from "./components/data";

ReactDOM.render(
  <React.StrictMode>
    <ExportWorkBook data={allData} />
  </React.StrictMode>,
  document.getElementById("root")
);
