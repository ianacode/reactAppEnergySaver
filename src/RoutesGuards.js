import React from 'react';
import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";

export const LoggedGuard = ({ Component, ...props }) => (
  useSelector((state) => state.loggedUser.currentUser) !== undefined
    ? <Component {...props} />
    : <Navigate to='/loginreg' replace />
)
export const NotLoggedGuard = ({ Component, ...props }) => (
  useSelector((state) => state.loggedUser.currentUser) === undefined
    ? <Component {...props} />
    : <Navigate to='/' replace />
)

