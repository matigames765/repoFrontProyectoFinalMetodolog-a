import { Route, Routes } from "react-router";
import { LandingScreen } from "../components/screens/landingScreen/LandingScreen";

export const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingScreen />} />
      </Routes>
    </div>
  );
};
