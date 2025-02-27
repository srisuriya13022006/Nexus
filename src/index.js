import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Correct import for React 18
import App from "./App";
import "./styles/global.css"; // ✅ Ensure your CSS file exists

const root = ReactDOM.createRoot(document.getElementById("root")); // ✅ Correct method for React 18
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
