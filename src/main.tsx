import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "@/styles/vars.css";
import "@/styles/global.css";

import App from "@/app.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
