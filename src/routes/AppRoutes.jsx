import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Auth/Login/Login";
// import Home from "../pages/Home";

const AppRoutes = ({ userLoggedIn }) => {
  return (
    <Routes>
      <Route path="/" element={userLoggedIn ? <Navigate to="/home" /> : <Login />} />
      {/* <Route path="/home" element={<Home />} /> */}
    </Routes>
  );
};

export default AppRoutes;
