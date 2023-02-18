import React from "react";
import { Route, Routes } from "react-router-dom";
import DashboardPage from "../pages/dashboard/Dashboard";

import LoginPage from "../pages/login/Login";
import SignUpPage from "../pages/signup/Signup";
import NotFoundPage from "../pages/notFoundPage/Notfoundpage";
import ProtectedRoutes from "../protectedRoutes/ProtectedRoutes";
import TechsProvider from "../providers/TechsContext";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoutes>
            <TechsProvider>
              {" "}
              <DashboardPage />{" "}
            </TechsProvider>
          </ProtectedRoutes>
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
