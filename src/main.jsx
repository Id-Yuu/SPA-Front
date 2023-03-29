import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/style/index.scss";
import "./assets/style/responsive.scss";

ReactDOM.createRoot(document.getElementById("container")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
