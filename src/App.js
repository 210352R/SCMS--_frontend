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

import Dashboard from "./pages/CustomerSide/CustomerDashboard";
import CoordinaterDashboard from "./pages/Coordinater/CoDashBoard";
import ScriptTag from "react-script-tag";
import AddminDashboard from "./pages/Admin/AddminDashboard";
import PieChartContainer from "./components/PieChartContainer";
import OrderCard from "./components/cards/OrderCard";
import Test from "./pages/Test";
import HomeCardsContainer from "./components/cards/HomeCardsContainer";
import Footer from "./components/HomeFooter/Footer";
import ImageUpload from "./components/ImageUpload";
import OrderDetailsPageCust from "./pages/CustomerSide/OrderDetailsPageCust";
import AdminFirstPage from "./pages/Admin/AdminFirstPage";
import AdminAllOrder from "./pages/Admin/AdminAllOrder";
import AdminCustomerList from "./pages/Admin/AdminCustomerList";
import AdminStoreDetail from "./pages/Admin/AdminStoreDetail";
import AdminLogin from "./pages/Admin/AdminLogin";
import CoOrdinaterLogin from "./pages/Coordinater/CoOrdinaterLogin";
import TrainCoordinaterBoard from "./pages/Coordinater/TrainCoordinaterBoard";
import TCoDash from "./pages/Coordinater/TCoDash";
import TCAddOrder from "./pages/Coordinater/TCAddOrder";
import AddOrderPage from "./pages/CustomerSide/AddOrderPage";

import COODash from "./pages/Coordinater/COODash";
import TCFirstPage from "./pages/Coordinater/TCFirstPage";
import TCTokens from "./pages/Coordinater/TCTokens";
import TCStoreDetails from "./pages/Coordinater/TCStoreDetails";
import TCTrains from "./pages/Coordinater/TCTrains";
import Truck from "./pages/Coordinater/Truck";
import ViewReport from "./pages/Admin/AdminViewReports";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/customerLogin" element={<CustomerLoginPage />} />
        <Route path="/adminLogin" element={<AdminLogin />} />
        <Route path="/coordinaterLogin" element={<CoOrdinaterLogin />} />
        <Route
          path="/customerRegister"
          element={<CustomerRegistrationForm />}
        />
        <Route path="/adminRegister" element={<AdminRegistrationForm />} />
        <Route
          path="/coordinaterRegister"
          element={<CoordinaterRegistrationForm />}
        />
        <Route path="/dashboard/:id" element={<Dashboard />} />
        <Route path="/adminboard/:id" element={<AdminFirstPage />} />
        <Route path="/traincodinaterboard/:id" element={<TCoDash />} />
        <Route
          path="/truckcodinaterboard/:id"
          element={<CoordinaterDashboard />}
        />
        <Route
          path="/custorderdetails/:id"
          element={<OrderDetailsPageCust />}
        />
        <Route path="/adminorderdetails/:id" element={<AdminAllOrder />} />
        <Route path="/admincustomerlist/:id" element={<AdminCustomerList />} />
        <Route path="/adminstorelist/:id" element={<AdminStoreDetail />} />
        <Route path="/customerOrderlist/:id" element={<AdminStoreDetail />} />

        <Route path="/coostorelist/:username" element={<TCStoreDetails />} />

        <Route
          path="/TCAddorder/:id/:storeId/:capacity/:coId"
          element={<TCAddOrder />}
        ></Route>

        <Route path="/addOrder/:id" element={<AddOrderPage />} />
        {/* <Route path="/trainCoordinaterDash" element={<TCoDash />} /> */}
        <Route path="/coo_train_token/:username" element={<TCTokens />} />
        <Route path="/coo_trains/:username" element={<TCTrains />} />

        <Route path="/truckPage/:username/:storeId" element={<Truck />} />
      </Routes>
    </Router>
    // <>
    //   <HomePage />
    // </>
  );
}

export default App;
