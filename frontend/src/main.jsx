import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { SocketContextProvider } from "./context/SocketContext";
import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SocketContextProvider>
      <App />
    </SocketContextProvider>
  </React.StrictMode>
);
