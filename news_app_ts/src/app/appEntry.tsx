import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./appStore";
import BaseLayout from "./layouts/BaseLayout";
import { ThemeProvider } from "./providers/ThemeProvider";
import "../shared/index.css";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <Provider store={store}>
      <BaseLayout />
    </Provider>
  </ThemeProvider>,
);
