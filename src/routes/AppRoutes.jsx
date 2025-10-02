import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Auth/Login/Login";
import ForgotPassword from "../pages/Auth/ForgotPassword/ForgotPassword";
import Dashboard from '../pages/Dashboard/Dashboard'

const AppRoutes = ({ userLoggedIn }) => {
  return (
    <Routes>
      <Route path="/" element={userLoggedIn ? <Navigate to="/home" /> : <Login />} />
      <Route path="/recuperarContrasenia" element={<ForgotPassword />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default AppRoutes;
