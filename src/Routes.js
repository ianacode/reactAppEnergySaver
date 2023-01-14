import { Route, Routes as BaseRoutes } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Rooms from "./components/Rooms/Rooms";
import Ranking from "./components/Ranking/Ranking";
import Members from "./components/Members/Members";
import Product from "./pages/Product";

export default function Routes() {
  return (
    <BaseRoutes>
      <Route path="/" element={<LandingPage />} />
      <Route path="ranking" element={<Ranking />} />
      <Route path="members" element={<Members />} />
      <Route path="rooms">
        <Route index element={<Rooms />} />
        <Route path=":productId" element={<Product />} />
      </Route>
      
    </BaseRoutes>
  );
}
