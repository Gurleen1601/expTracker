import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminRoute= ({children}) => {
    const { userAuth } = useSelector(state => state?.users) 
    return userAuth?.isAdmin ? children : <Navigate replace to="/not-found" />
 }

export default AdminRoute;
