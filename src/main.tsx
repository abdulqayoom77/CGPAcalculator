import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { GPAProvider } from "./context/GPAContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GPAProvider>
      <App />
    </GPAProvider>
  </StrictMode>
);
