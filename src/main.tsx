import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { getPreviewBasePath } from "../basePath";
import { BrowserRouter } from "react-router-dom";

const basename =
  getPreviewBasePath() || import.meta.env.VITE_APP_PUBLIC_URL || "/";

console.log("Router basename:", basename);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
