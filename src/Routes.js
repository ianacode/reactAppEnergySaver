import { Route, Routes as BaseRoutes } from "react-router-dom";
import LandingPage from "./protected/LandingPage/LandingPage";
import Rooms from "./protected/Rooms/Rooms";
import RoomDetail from "./protected/RoomDetail/RoomDetail";
import Ranking from "./protected/Ranking/Ranking";
import Members from "./protected/Members/Members";
import Consumption from "./protected/Consumption/Consumption";
import Loginreg from "./public/Loginreg/Loginreg";
import Login from "./public/Login/Login";
import {
  LoggedGuard,
  NotLoggedGuard,
} from "./RoutesGuards";

export default function Routes() {
  return (
    <BaseRoutes>
      <Route path="login" element={<NotLoggedGuard Component={Login} />} />
      <Route path="loginreg" element={<NotLoggedGuard Component={Loginreg} />} />
      <Route path="/" element={<LoggedGuard Component={LandingPage} />} />
      <Route path="ranking" element={<LoggedGuard Component={Ranking} />} />
      <Route path="members" element={<LoggedGuard Component={Members} />} />
      <Route path="consumption" element={<LoggedGuard Component={Consumption} />} />
      <Route path="rooms" >
        <Route index element={<LoggedGuard Component={Rooms} />} />
        <Route path=":roomId" element={<LoggedGuard Component={RoomDetail} />} />
      </Route>
    </BaseRoutes>
  );
}
