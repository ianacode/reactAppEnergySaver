import { Route, Routes as BaseRoutes } from "react-router-dom";
import LandingPage from "./Protected/LandingPage/LandingPage";
import Rooms from "./Protected/Rooms/Rooms";
import Ranking from "./Protected/Ranking/Ranking";
import Members from "./Protected/Members/Members";
import Loginreg from "./Public/Loginreg/Loginreg";
import Guard from "./guard/Guard";
import Login from "./Public/Login/Login";

export default function Routes() {
  return (
    <BaseRoutes>
      <Route path="login" element={<Login />} />
      <Route path="/loginreg" element={<Loginreg />} />
      <Route path="/" element={<Guard Component={LandingPage} />} />
      <Route path="ranking" element={<Guard Component={Ranking} />} />
      <Route path="members" element={<Guard Component={Members} />} />
      <Route path="rooms" >
        <Route index element={<Guard Component={Rooms} />} />
      </Route>
    </BaseRoutes>
  );
}
