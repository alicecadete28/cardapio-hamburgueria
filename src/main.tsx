import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import App from "./App.jsx";
import "../scripts.js";
import ReactDOM from "react-dom/client";
import { Home } from "./pages/Home/Home";
import ProductDetailPage from "./pages/Item-details/ItemDetails";

import { PopUp } from "./components/PopUp.jsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
