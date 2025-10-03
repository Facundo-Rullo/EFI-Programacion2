import { Routes, Route, Navigate } from "react-router-dom";
import App from "../App"; // 👈 Tu layout con Sidebar, Header, Footer, Outlet
import Login from "../pages/Auth/Login/Login";
import ForgotPassword from "../pages/Auth/ForgotPassword/ForgotPassword";
import Dashboard from '../pages/Dashboard/Dashboard'

const AppRoutes = ({ userLoggedIn }) => {
  return (
    <Routes>
      {/* Rutas publicas de auth */}
      <Route
        path="/login" element={userLoggedIn ? <Navigate to="/dashboard" /> : <Login />}/>
      <Route path="/recuperarContrasenia" element={<ForgotPassword />} />

      {/* Rutas protegidas con App */}
      <Route element={<App />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;

