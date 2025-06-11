import { Route, Routes } from "react-router";
import { OrdenesAdmin } from "../components/ui/Admin/OrdenesAdmin/OrdenesAdmin";
import { ClientesAdmin } from "../components/ui/Admin/ClientesAdmin/ClientesAdmin";
import { ProductosAdmin } from "../components/ui/Admin/ProductosAdmin/ProductosAdmin";
import { SideBarAdmin } from "../components/ui/Admin/SideBarAdmin/SideBarAdmin";
import styles from "./RutasAdmin.module.css";
import { NavBarAdmin } from "../components/ui/Admin/NavBarAdmin/NavBarAdmin";
import { useState } from "react";
import { ModalAgregarProducto } from "../components/ui/Admin/ModalAgregarProducto/ModalAgregarProducto";
export const RutasAdmin = () => {
  const [mostrarModal, setMostrarModal] = useState(false);

  return (
    <div className={styles.rutasContainer}>
      <NavBarAdmin onOpenModal={() => setMostrarModal(true)} />

      <div className={styles.rutas}>
        <SideBarAdmin />
        <Routes>
          <Route path="/ordenes" element={<OrdenesAdmin />} />
          <Route path="/clientes" element={<ClientesAdmin />} />
          <Route path="/productos" element={<ProductosAdmin />} />
        </Routes>

        {/* Modal Agregar Producto*/}

        <ModalAgregarProducto
          show={mostrarModal}
          onClose={() => setMostrarModal(false)}
        />
      </div>
    </div>
  );
};
