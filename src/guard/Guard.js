import React from 'react';
import {Route, Navigate} from "react-router-dom";
import loginService from "../services/LoginService";

const Guard = ({ Component: Component, ...props }) => (
  loginService.isAuthenticated() === false
    ? <Component {...props} />
    : <Navigate to='/loginreg' replace />
)

export default Guard;
