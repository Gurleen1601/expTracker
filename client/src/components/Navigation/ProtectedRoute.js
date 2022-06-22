import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute= ({children}) => {
    const { userAuth } = useSelector(state => state?.users)
    return userAuth ? children : <Navigate replace to="/login" />
 }

export default ProtectedRoute;
