import React from "react";
import "./assets/css/base/base.css";
import { BrowserRouter as Router } from "react-router-dom";
import UBSProvider from "./contexts/UBSContexts";
import Routes from "./routes";

function App() {
  return (
    <UBSProvider>
      <Router>
        <Routes/>
      </Router>
    </UBSProvider>
  );
}

export default App;
