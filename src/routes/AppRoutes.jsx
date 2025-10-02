import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Auth/Login/Login";
import ForgotPassword from "../pages/Auth/ForgotPassword/ForgotPassword";

const AppRoutes = ({ userLoggedIn }) => {
  return (
    <Routes>
      <Route path="/" element={userLoggedIn ? <Navigate to="/home" /> : <Login />} />
      <Route path="/recuperarContrasenia" element={<ForgotPassword />} />
    </Routes>
  );
};

export default AppRoutes;
