import React from "react";
import ReactDOM from "react-dom";
import { transitions, positions, Provider as AlertProvider } from "react-alert";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

const options = {
  position: positions.TOP_RIGHT,
  timeout: 5000,
  offset: "10px",
  transition: transitions.SCALE,
};

const AlertTemplate = ({ style, options, message, close }: any) => (
  <div
    style={{
      backgroundColor: "#45b467",
      borderRadius: "10px",
      padding: "20px",
      color: "#ffffff",
      ...style,
    }}
  >
    {options.type === "info" && "!"}
    {options.type === "success" && ":)"}
    {options.type === "error" && ":("}
    {message}
    <button
      style={{
        backgroundColor: "transparent",
        color: "#ffffff",
        border: "none",
        margin: "10px",
      }}
      onClick={close}
    >
      X
    </button>
  </div>
);

ReactDOM.render(
  <AlertProvider template={AlertTemplate} {...options}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AlertProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
