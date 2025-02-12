import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";  // Add the .jsx extension explicitly

const root = createRoot(document.getElementById("app"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
