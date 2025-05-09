import { Route, Routes } from "react-router";
import { LandingScreen } from "../components/screens/landingScreen/LandingScreen";
import { CategoriasScreen } from "../components/screens/CategoriasScreen/CategoriasScreen";
import { CatalogoScreen } from "../components/screens/CatalogoScreen/CatalogoScreen";
import { AdminScreen } from "../components/screens/AdminScreen/AdminScreen";
import { LoginScreen } from "../components/screens/LoginScreen/LoginScreen";
import { RegisterScreen } from "../components/screens/registerScreen/RegisterScreen";
import { ClientesAdmin } from "../components/ui/Admin/ClientesAdmin/ClientesAdmin";
import { VentasAdmin } from "../components/ui/Admin/VentasAdmin/VentasAdmin";
import { VisitasAdmin } from "../components/ui/Admin/VisitasAdmin/VisitasAdmin";
import { OrdenesAdmin } from "../components/ui/Admin/OrdenesAdmin/OrdenesAdmin";
import { ProductosAdmin } from "../components/ui/Admin/ProductosAdmin/ProductosAdmin";

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
        <Route path="/admin" element={<AdminScreen />} />
        <Route path="/admin/ventas" element={<VentasAdmin />} />
        <Route path="/admin/visitas" element={<VisitasAdmin />} />
        <Route path="/admin/ordenes" element={<OrdenesAdmin />} />
        <Route path="/admin/clientes" element={<ClientesAdmin />} />
        <Route path="/admin/productos" element={<ProductosAdmin />} />
      </Routes>
    </div>
  );
};
