import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Theme } from "./context/ThemeContext.tsx";

createRoot(document.getElementById("root")!).render(
  <Theme>
    <App />
  </Theme>,
);
