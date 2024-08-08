import React from "react";
import Dashboard from "./pages/Dashboard";
import "./App.css";

function App() {
  const code = new URLSearchParams(window.location.search).get("code");
  return <Dashboard code={code} />;
}

export default App;
