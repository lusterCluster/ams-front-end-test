import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import router from "./routes/main";
import ProvideThemeContext from "./store/context/theme/main";
import ProvideProductContext from "./store/context/product/productContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProvideThemeContext>
      <ProvideProductContext>
        <RouterProvider router={router} />
      </ProvideProductContext>
    </ProvideThemeContext>
  </React.StrictMode>
);

reportWebVitals();
