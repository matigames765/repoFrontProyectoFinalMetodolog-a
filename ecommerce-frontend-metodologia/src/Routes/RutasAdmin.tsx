import { Route, Routes } from "react-router";
import { HeaderAdmin } from "../components/ui/Admin/HeaderAdmin/HeaderAdmin";
import { VentasAdmin } from "../components/ui/Admin/VentasAdmin/VentasAdmin";
import { VisitasAdmin } from "../components/ui/Admin/VisitasAdmin/VisitasAdmin";
import { OrdenesAdmin } from "../components/ui/Admin/OrdenesAdmin/OrdenesAdmin";
import { ClientesAdmin } from "../components/ui/Admin/ClientesAdmin/ClientesAdmin";
import { ProductosAdmin } from "../components/ui/Admin/ProductosAdmin/ProductosAdmin";
import { SideBarAdmin } from "../components/ui/Admin/SideBarAdmin/SideBarAdmin";
import styles from "./RutasAdmin.module.css";
import { NavBarAdmin } from "../components/ui/Admin/NavBarAdmin/NavBarAdmin";
export const RutasAdmin = () => {
  return (
    <div className={styles.rutasContainer}>
      <NavBarAdmin />
      <HeaderAdmin />
      <div className={styles.rutas}>
        <SideBarAdmin />
        <Routes>
          {/* header */}
          {/* sidebar */}

          <Route path="/ventas" element={<VentasAdmin />} />
          <Route path="/visitas" element={<VisitasAdmin />} />
          <Route path="/ordenes" element={<OrdenesAdmin />} />
          <Route path="/clientes" element={<ClientesAdmin />} />
          <Route path="/productos" element={<ProductosAdmin />} />
          {/* footer */}
        </Routes>
      </div>
    </div>
  );
};
