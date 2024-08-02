import React from "react";
import "./App.css";
import { AuthProvider } from "./contexts/AuthContext";
import Routes from "./routes";

const App = () => (
  <AuthProvider>
    <Routes />
  </AuthProvider>
);

export default App;
