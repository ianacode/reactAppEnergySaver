import { Route, Routes as BaseRoutes } from "react-router-dom";
import LandingPage from "./protected/LandingPage/LandingPage";
import Rooms from "./protected/Rooms/Rooms";
import Ranking from "./protected/Ranking/Ranking";
import Members from "./protected/Members/Members";
import Loginreg from "./public/Loginreg/Loginreg";
import RoutesGuard from "./RoutesGuard";
import Login from "./public/Login/Login";

export default function Routes() {
  return (
    <BaseRoutes>
      <Route path="login" element={<Login />} />
      <Route path="/loginreg" element={<Loginreg />} />
      <Route path="/" element={<RoutesGuard Component={LandingPage} />} />
      <Route path="ranking" element={<RoutesGuard Component={Ranking} />} />
      <Route path="members" element={<RoutesGuard Component={Members} />} />
      <Route path="rooms" >
        <Route index element={<RoutesGuard Component={Rooms} />} />
      </Route>
    </BaseRoutes>
  );
}
