import { Route, Routes as BaseRoutes } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Rooms from "./components/Rooms/Rooms";
import Ranking from "./components/Ranking/Ranking";
import Members from "./components/Members/Members";
import Loginreg from "./components/Loginreg/Loginreg";
import Guard from "./guard/Guard";
import Login from "./components/Login/Login";

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
