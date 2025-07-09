import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";

import Home from "../pages/Home";
import Admin from "../pages/Admin";
import Login from "../pages/Login";
import Register from "../pages/Register";
import VerifyCode from "../pages/VerifyCode";
import NotFound from "../pages/NotFound"; 
import ProtectedRoute from "../components/ProtectedRoute";


const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/login" replace />} />

    <Route element={<AuthLayout />}>
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register />} />
      <Route path="/verify" element={<VerifyCode />} />
    </Route>

    <Route
      element={
        <ProtectedRoute>
          <MainLayout />
        </ProtectedRoute>
      }
    >
      <Route path="/home" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
    </Route>

    <Route path="*" element={<NotFound />} />

  </Routes>
);

export default AppRoutes;




    //  <Route element={<MainLayout />}>
    //   <Route path="/home" element={<Home />} />
    //   <Route path="/admin" element={<Admin />} />
    // </Route>
