import { Route, Routes as BaseRoutes } from "react-router-dom";
import LandingPage from "./protected/LandingPage/LandingPage";
import Rooms from "./protected/Rooms/Rooms";
import RoomDetail from "./protected/RoomDetail/RoomDetail";
import Ranking from "./protected/Ranking/Ranking";
import Members from "./protected/Members/Members";
import Consumption from "./protected/Consumption/Consumption";
import Loginreg from "./public/Loginreg/Loginreg";
import RoutesGuard from "./RoutesGuard";
import Login from "./public/Login/Login";

export default function Routes() {
  return (
    <BaseRoutes>
      <Route path="login" element={<Login />} />
      <Route path="loginreg" element={<Loginreg />} />
      <Route path="/" element={<RoutesGuard Component={LandingPage} />} />
      <Route path="ranking" element={<RoutesGuard Component={Ranking} />} />
      <Route path="members" element={<RoutesGuard Component={Members} />} />
      <Route path="consumption" element={<RoutesGuard Component={Consumption} />} />
      <Route path="rooms" >
        <Route index element={<RoutesGuard Component={Rooms} />} />
        <Route path=":roomId" element={<RoutesGuard Component={RoomDetail} />} />
      </Route>
    </BaseRoutes>
  );
}
