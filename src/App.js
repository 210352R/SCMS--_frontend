import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CustomerLoginPage from "./pages/LoginPages/CustomerLoginPage";
import CustomerRegistrationForm from "./pages/CustomerRegistrationForm";
import AdminRegistrationForm from "./pages/AdminRegistrationForm";
import CoordinaterRegistrationForm from "./pages/CoordinaterRegistrationForm";
import Charts from "./components/Charts";

import { Box, Switch, useColorMode } from "theme-ui";
import Home from "./pages/home";
import Calender from "./components/Calender";

import Dashboard from "./pages/CustomerSide/Dashboard";
import ScriptTag from "react-script-tag";
import AddminDashboard from "./pages/Admin/AddminDashboard";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AddminDashboard />} />
        <Route path="/customerLogin" element={<CustomerLoginPage />} />
        <Route
          path="/customerRegister"
          element={<CustomerRegistrationForm />}
        />
        <Route path="/adminRegister" element={<AdminRegistrationForm />} />
        <Route
          path="/coordinaterRegister"
          element={<CoordinaterRegistrationForm />}
        />
      </Routes>
    </Router>
  );
}

export default App;
