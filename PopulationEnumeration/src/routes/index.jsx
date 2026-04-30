import { createBrowserRouter, Navigate } from "react-router-dom";
import MinimalLayout from "../layouts/MinimalLayout/MinimalLayout";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Login from "../pages/auth/Login";
import OTP from "../pages/auth/OTP";
import Dashboard from "../pages/dashboard/Dashboard";
import ProtectedRoute from "./ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MinimalLayout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "otp", element: <OTP /> },
      { path: "/", element: <Navigate to="/login" replace /> },
    ],
  },
  {
    path: "/app",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    children: [
      { path: "dashboard", element: <Dashboard /> },
      { path: "", element: <Navigate to="dashboard" replace /> },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);
