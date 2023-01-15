import React from 'react';
import {Navigate} from "react-router-dom";
import loginService from "./services/LoginService";

export const LoggedGuard = ({ Component: Component, ...props }) => (
  loginService.isAuthenticated()
    ? <Component {...props} />
    : <Navigate to='/loginreg' replace />
)
export const NotLoggedGuard = ({ Component: Component, ...props }) => (
  !loginService.isAuthenticated()
    ? <Component {...props} />
    : <Navigate to='/' replace />
)

