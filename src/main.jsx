import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import {firebaseConfig} from "./firebase/config.js";

import {initializeApp} from "firebase/app";

import "./index.css";

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
