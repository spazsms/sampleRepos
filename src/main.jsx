import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import router from "./routes.jsx";
import { GameProvider } from "./Dashboard/Context.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GameProvider>
      <RouterProvider router={router} />
    </GameProvider>
  </StrictMode>
);
