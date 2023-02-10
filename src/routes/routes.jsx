import React from "react"
import { Route, Routes } from "react-router-dom"
import DashboardPage from "../pages/Dashboard/dashboard"
import LoginPage from "../pages/Login/login"
import SignUpPage from "../pages/Signup/signup"



const AppRoutes = ()=>{

    return(
    <Routes>
        <Route path="/" element={ <LoginPage  />} />
        <Route path="/signup" element={ <SignUpPage /> } />
        <Route path="/dashboard" element={ <DashboardPage /> } />
    </Routes>
    )
}

export default AppRoutes