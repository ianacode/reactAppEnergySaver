import { Route, Routes as BaseRoutes } from "react-router-dom";
import LandingPage from "./protected/LandingPage/LandingPage";
import Rooms from "./protected/Rooms/Rooms";
import AddRoom from "./protected/AddRoom/AddRoom";
import AddDevice from "./protected/AddDevice/AddDevice";
import AddMember from "./protected/AddMember/AddMember";
import RoomDetail from "./protected/RoomDetail/RoomDetail";
import DeviceDetail from "./protected/DeviceDetail/DeviceDetail";
import Ranking from "./protected/Ranking/Ranking";
import Members from "./protected/Members/Members";
import Consumption from "./protected/Consumption/Consumption";
import Notifications from "./protected/Notifications/Notifications";
import NotificationRead from "./protected/NotificationRead/NotificationRead";
import SendNotification from "./protected/SendNotification/SendNotification";
import Challenges from "./protected/Challenges/Challenges";
import ChallengeDetail from "./protected/ChallengeDetail/ChallengeDetail";
import RoomDevices from "./protected/RoomDevices/RoomDevices";
import Loginreg from "./public/Loginreg/Loginreg";
import Login from "./public/Login/Login";
import Registration from "./public/Registration/Registration";
import NotFoundPage from "./public/NotFoundPage/NotFoundPage";
import ChangeMember from "./protected/ChangeMember/ChangeMember";
import React, {useEffect} from "react";
import { onAuthStateChanged } from "firebase/auth";

import {
  LoggedGuard,
  NotLoggedGuard,
} from "./RoutesGuards";
import {auth} from "./firebase";
import {loggedIn, loggedOut} from "./store/logged-user-slice";
import {useDispatch} from "react-redux";
import userService from "./services/UserService";
import {setHome} from "./store/home-slice";

export default function Routes() {
  const dispatch = useDispatch();
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        const email = user.email;
        console.log("uid", uid)
        userService.getUserByEmail(email).then((user)=>{
          console.log("user", user)
          dispatch(setHome({}));
          dispatch(loggedIn(user));
        });

      } else {
        // User is signed out
        // ...
        console.log("user is logged out")
        dispatch(setHome({}));
        dispatch(loggedOut());
      }
    });
  }, [])


  return (
    <BaseRoutes>
      <Route path="login" element={<NotLoggedGuard Component={Login} />} />
      <Route path="registration" element={<NotLoggedGuard Component={Registration} />} />
      <Route path="loginreg" element={<NotLoggedGuard Component={Loginreg} />} />
      <Route path="/" element={<LoggedGuard Component={LandingPage} />} />
      <Route path="ranking" element={<LoggedGuard Component={Ranking} />} />
      <Route path="members" element={<LoggedGuard Component={Members} />} />
      <Route path="consumption" element={<LoggedGuard Component={Consumption} />} />
      <Route path="notifications" element={<LoggedGuard Component={Notifications} />} />
      <Route path="notificationread" element={<LoggedGuard Component={NotificationRead} />} />
      <Route path="sendnotification" element={<LoggedGuard Component={SendNotification} />} />
      <Route path="challenges" element={<LoggedGuard Component={Challenges} />} />

      <Route path="rooms" >
        <Route index element={<LoggedGuard Component={Rooms} />} />
        <Route path=":roomId" element={<LoggedGuard Component={RoomDetail} />} />
        <Route path=":roomId/challenges" element={<LoggedGuard Component={Challenges} />} />
        <Route path=":roomId/devices" element={<LoggedGuard Component={RoomDevices} />} />
        <Route path=":roomId/devices/:deviceId" element={<LoggedGuard Component={DeviceDetail} />} />
        <Route path=":roomId/devices/:deviceId/challenges">
          <Route index element={<LoggedGuard Component={Challenges} />} />
          <Route path=":challengeId" element={<LoggedGuard Component={ChallengeDetail} />} />
        </Route>
        <Route path=":roomId/adddevice" element={<LoggedGuard Component={AddDevice} />} />
      </Route>

      <Route path="addroom" element={<LoggedGuard Component={AddRoom} />} />
      <Route path="addmember" element={<LoggedGuard Component={AddMember} />} />
      <Route path="changemember/:memberId" element={<LoggedGuard Component={ChangeMember} />} />

      <Route path="*" element={<NotFoundPage />} />
    </BaseRoutes>
  );
}
