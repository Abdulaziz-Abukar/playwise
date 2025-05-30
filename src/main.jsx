import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { App } from "./App";

import "./index.css";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(
  <Provider store={store}>
    <BrowserRouter basename="/playwise">
      <App />
    </BrowserRouter>
  </Provider>
);
