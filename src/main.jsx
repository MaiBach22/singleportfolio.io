import React from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./components/Header/NavBar";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavBar />
    <App />
  </React.StrictMode>
);
