import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";


/**
 * Turns URL path into router basename by removing everything after the last slash
 * @param {string} path URL path, probably window.location.pathname
 * @returns {string} final basename
 */
const basePath = '/deca_22TDW/deca_22TDW_14/reactapp';
const getBasename = path => path.substr(0, path.lastIndexOf(basePath) + basePath.length);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={getBasename(window.location.pathname)}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
