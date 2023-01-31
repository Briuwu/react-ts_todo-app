import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./sass/style.css";
import { TodoContextProvider } from "./TodoContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <TodoContextProvider>
      <App />
    </TodoContextProvider>
  </React.StrictMode>
);
