import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";

import ProtectedRoute from "../components/ProtectedRoute";
import Home from "../pages/Home";
import Admin from "../pages/Admin";
import Login from "../pages/Login";
import Register from "../pages/Register";
import VerifyCode from "../pages/VerifyCode";
import NotFound from "../pages/NotFound";
import Welcome from "../pages/Welcome";
import Loading from "../pages/Loading";


const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/welcome" replace />} />

    <Route element={<AuthLayout />}>
      <Route path="/welcome" element={<Welcome/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register />} />
      <Route path="/verify" element={<VerifyCode />} />
      <Route path="/loading" element={<Loading />} />
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
