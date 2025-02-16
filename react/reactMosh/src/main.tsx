import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
//Importing boostrap css after installing bootstrap
import "bootstrap/dist/css/bootstrap.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
