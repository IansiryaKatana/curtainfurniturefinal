import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import { DynamicFavicon } from "./components/DynamicFavicon";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <DynamicFavicon />
      <App />
    </HelmetProvider>
  </StrictMode>
);
