import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Plans from "./Pages/Plans/Plans";
import PlanDetailPage from "./Pages/Plans/PlanDetailPage";
import Renew from "./Pages/Renew/Renew";
import Claims from "./Pages/Claims/Claims";
import About from "./Pages/About/About";
import Error from "./Pages/Error/Error";
import { AuthProvider } from "./Pages/Plans/Auth/auth";
import Logout from "./Pages/Plans/Auth/Logout";
import RegisterForm from "./Pages/Plans/Auth/Register";
import Login from "./Pages/Plans/Auth/Login";
import CarInsurance from "./Pages/Car/CarInsurance";
import AdminPage from "./Pages/Plans/Auth/AdminPage"; // Import your admin page component
import CalculationPage from "./Pages/Calculation/CalculationPage";
import ChatBot from "./Pages/Home/ChatBot";
import Payment from "./Pages/Payment";

const App = () => {
  return (
    <div className="">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/plans/:_id" element={<PlanDetailPage />} />
          <Route path="/renew" element={<Renew />} />
          <Route path="/claims" element={<Claims />} />
          <Route path="/about" element={<About />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/car-insurance" element={<CarInsurance />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/calculation" element={<CalculationPage/>}></Route>
          <Route path="/adminPage" element={<AdminPage />} /> {/* Add the route for the admin page */}
          <Route path="*" element={<Error />} />
          <Route path="/chatbot" element={<ChatBot/>} />
          <Route path="/payment" element={<Payment/>} />
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default App;
