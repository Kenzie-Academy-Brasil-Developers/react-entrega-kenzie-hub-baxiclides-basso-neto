import React from "react";
import { Route, Routes } from "react-router-dom";
import DashboardPage from "../pages/Dashboard/dashboard";

import LoginPage from "../pages/Login/login";
import SignUpPage from "../pages/Signup/signup";
import NotFoundPage from "../pages/NotFoundPage/notfoundpage";
import NewTechFormPage from "../pages/ModalNewTechForm/modalnewtechformpage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      {/* <Route path="newtechformpage" element={<NewTechFormPage/> } />
      </Route> */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
