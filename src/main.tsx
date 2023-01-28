import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/home/home.page";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </React.StrictMode>
);
