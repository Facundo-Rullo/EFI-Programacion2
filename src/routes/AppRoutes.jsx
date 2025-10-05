import { Routes, Route, Navigate } from "react-router-dom";
import App from "../App"; 
import Login from "../pages/Auth/Login/Login";
import ForgotPassword from "../pages/Auth/ForgotPassword/ForgotPassword";
import Dashboard from '../pages/Dashboard/Dashboard'
import Maquinaria from '../pages/Maquinaria/Maquinaria'

const AppRoutes = ({ userLoggedIn }) => {
  return (
    <Routes>
      {/* Rutas publicas de auth */}
      {/* !!!!!!!!!!!!!!!!!!!!! Acomodar esta ruta !!!!!!!!!!!!!!!!!!!!! */}
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route path="/login" element={userLoggedIn ? <Navigate to="/dashboard" /> : <Login />}/>
      <Route path="/recuperarContrasenia" element={<ForgotPassword />} />

      {/* Rutas protegidas con App */}
      <Route element={<App />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/maquinaria" element={<Maquinaria />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;

