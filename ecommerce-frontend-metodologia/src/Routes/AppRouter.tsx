import { Route, Routes } from "react-router";
import { LandingScreen } from "../components/screens/landingScreen/LandingScreen";
import { CategoriasScreen } from "../components/screens/CategoriasScreen/CategoriasScreen";
import { CatalogoScreen } from "../components/screens/CatalogoScreen/CatalogoScreen";
import { AdminScreen } from "../components/screens/adminScreen/AdminScreen";
import { LoginScreen } from "../components/screens/LoginScreen/LoginScreen";
import { RegisterScreen } from "../components/screens/registerScreen/RegisterScreen";

export const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingScreen />} />
        <Route path="/categorias" element={<CategoriasScreen />} />
        <Route path="/catalogo" element={<CatalogoScreen />} />
        <Route path="/admin" element={<AdminScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
      </Routes>
    </div>
  );
};
