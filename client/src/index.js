import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import WorkoutContext from "./context/WorkoutContext";
import AuthContext from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContext>
    <WorkoutContext>
      <App />
    </WorkoutContext>
  </AuthContext>
);
