import { Routes, Route, Navigate } from "react-router-dom";
import App from "../App"; 
import Login from "../pages/Auth/Login/Login";
import ForgotPasswordStep1 from "../pages/Auth/ForgotPassword/ForgotPasswordStep1/ForgotPasswordStep1";
import ForgotPasswordStep2 from "../pages/Auth/ForgotPassword/ForgotPasswordStep2/ForgotPasswordStep2";
import ForgotPasswordStep3 from "../pages/Auth/ForgotPassword/ForgotPasswordStep3/ForgotPasswordStep3";
import ForgotPasswordStep4 from "../pages/Auth/ForgotPassword/ForgotPasswordStep4/ForgotPasswordStep4";
import ChangePassword from '../pages/Auth/ChangePassword/ChangePassword'
import Dashboard from '../pages/Dashboard/Dashboard'
import VisualizeAllNotifications from "../pages/VisualizeAllNotifications/VisualizeAllNotifications";
import VisualizeNotification from "../pages/VisualizeNotification/VisualizeNotification";
import ChangePhoto from "../pages/ChangePhoto/ChangePhoto";
import Machinery from '../pages/Machinery/Machinery'
import Maintenance from "../pages/Maintenance/Maintenance";
import Employees from '../pages/Employees/Employees'
import InfoUser from "../pages/InfoUser/InfoUser";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import Stock from "../pages/Stock/Stock";
import Users from "../pages/Security/Users/Users";
import Roles from "../pages/Security/Roles/Roles";
import Permits from "../pages/Security/Permits/Permits";
import Lotes from "../pages/Lotes/Lotes";
import AssignPermitsUser from "../pages/Security/AssignPermitsUser/AssignPermitsUser";
import AssignRolesUser from "../pages/Security/AssignRoleUser/AssignRoleUser";

const AppRoutes = ({ userLoggedIn }) => {
  return (
    <Routes>
      {/* Rutas publicas de auth */}
      {/* !!!!!!!!!!!!!!!!!!!!! Acomodar esta ruta !!!!!!!!!!!!!!!!!!!!! */}
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route path="/login" element={userLoggedIn ? <Navigate to="/dashboard" /> : <Login />}/>
      <Route path="/recuperarContraseniaPaso1" element={<ForgotPasswordStep1 />} />
      <Route path="/recuperarContraseniaPaso2" element={<ForgotPasswordStep2 />} />
      <Route path="/recuperarContraseniaPaso3" element={<ForgotPasswordStep3 />} />
      <Route path="/recuperarContraseniaPaso4" element={<ForgotPasswordStep4 />} />

      {/* Rutas protegidas con App */}
      <Route element={<App />}>
        <Route path="/visualizeAllnotifications" element={<VisualizeAllNotifications />} />
        <Route path="/visualizenotification" element={<VisualizeNotification />} />
        <Route path="/changePhoto" element={<ChangePhoto />} />
        <Route path="/changePassword" element={<ChangePassword />} />
        <Route path="/infoUser" element={<InfoUser />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/machinery" element={<Machinery />} />
        <Route path="/maintenance" element={<Maintenance />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/stock" element={<Stock />} />
        <Route path="/lotes" element={<Lotes />} />
        <Route path="/users" element={<Users />} />
        <Route path="/roles" element={<Roles />} />
        <Route path="/permits" element={<Permits />} />
        <Route path="/assignPermitsUser" element={<AssignPermitsUser />} />
        <Route path="/assignRoles" element={<AssignRolesUser />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;

