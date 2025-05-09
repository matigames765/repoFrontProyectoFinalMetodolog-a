import { Route, Routes } from "react-router";
import { LandingScreen } from "../components/screens/landingScreen/LandingScreen";
import { CategoriasScreen } from "../components/screens/CategoriasScreen/CategoriasScreen";
import { CatalogoScreen } from "../components/screens/CatalogoScreen/CatalogoScreen";
import { AdminScreen } from "../components/screens/AdminScreen/AdminScreen";
import { LoginScreen } from "../components/screens/LoginScreen/LoginScreen";
import { RegisterScreen } from "../components/screens/registerScreen/RegisterScreen";
import { RutasAdmin } from "./RutasAdmin";

export const AppRouter = () => {
  return (
    <div>
      <Routes>
        {/* Rutas eCommerce */}
        <Route path="/" element={<LandingScreen />} />
        <Route path="/categorias" element={<CategoriasScreen />} />
        <Route path="/catalogo" element={<CatalogoScreen />} />

        {/* Rutas login y register */}
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />

        {/* Rutas Admin  - cambiar archivo a admin*/}
        <Route path="/admin" element={<AdminScreen />} />
        <Route path="/admin/*" element={<RutasAdmin />} />
      </Routes>
    </div>
  );
};
