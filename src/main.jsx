import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import RecipeDataProvider from "./contexts/RecipeDataProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <RecipeDataProvider>
        <App />
      </RecipeDataProvider>
    </BrowserRouter>
  </React.StrictMode>
);
