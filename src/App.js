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
import PieChartContainer from "./components/PieChartContainer";
import CoordinaterDashboard from "./pages/Coordinater/CoDashBoard";
import OrderCard from "./components/cards/OrderCard";
import Test from "./pages/Test";
import HomeCardsContainer from "./components/cards/HomeCardsContainer";
import Footer from "./components/HomeFooter/Footer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
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
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/adminboard" element={<AddminDashboard />} />
      </Routes>
    </Router>
    // <>
    //   <HomePage />
    // </>
  );
}

export default App;
