import React from 'react';
import {Navigate} from "react-router-dom";
import loginService from "../services/LoginService";

const Guard = ({ Component: Component, ...props }) => (
  loginService.isAuthenticated() === true
    ? <Component {...props} />
    : <Navigate to='/loginreg' replace />
)

export default Guard;
