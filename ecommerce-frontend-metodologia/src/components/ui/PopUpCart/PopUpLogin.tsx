import { FC, useState } from "react";
import styles from "./PopUpLogin.module.css";
import { X } from "lucide-react";
import { IUsuario } from "../../../types/Usuario/IUsuario";
import { usuarioStore } from "../../../store/Usuario/usuarioStore";
import { ModalEditarDatosUsuario } from "../ModalEditarDatosUsuario/ModalEditarDatosUsuario";
import { Button } from "react-bootstrap";
import { OrdenesUsuario } from "./OrdenesUsuario/OrdenesUsuario";
import { IOrdenCompra } from "../../../types/Usuario/IOrdenCompra";

type ICardPopUp = {
  handleCloseModal: () => void;
  visible: boolean;
  usuario: IUsuario;
};

export const PopUpLogin: FC<ICardPopUp> = ({
  handleCloseModal,
  visible,
  usuario,
}) => {
  const setUsuarioActivo = usuarioStore((state) => state.setUsuarioActivo);

  const [mostrarModalEditar, setMostrarModalEditar] = useState(false);

  //Agregar estado para las ordenes de compra del usuario
  const [ordenes, setOrdenes] = useState<IOrdenCompra[]>([]);

  const handleCerrarSeccion = async () => {
    if (usuario) {
      setUsuarioActivo(null);
      localStorage.setItem("authentication", "");
    }
    handleCloseModal();
  };

  const handleEditarDatos = () => {
    setMostrarModalEditar(true);
  };

  const { nombre, email, dni } = usuario || {};
  return (
    <div
      className={`${styles.overlay} ${visible ? styles.show : ""}`}
      onClick={handleCloseModal}
    >
      <div
        className={`${styles.popupCart} ${visible ? styles.show : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.popupContent}>
          <div className={styles.userHeader}>
            <h3>Usuario: {usuario?.nombre}</h3>
          </div>
          <button className={styles.navbarBoton} onClick={handleCloseModal}>
            <X size={40} />
          </button>
        </div>
        <div className={styles.usuarioContent}>
          <div className={styles.userItem}>
            <h6>Usuario:</h6>
            {usuario ? nombre : ""}
          </div>
          <div className={styles.userItem}>
            <h6>Email:</h6>
            {usuario ? email : ""}
          </div>
          <div className={styles.userItem}>
            <h6>DNI:</h6>
            {usuario ? dni : ""}
          </div>
          <div className={styles.userItem}>
            <h6>Contraseña:</h6>
            *********
          </div>

          <div className={styles.buttonsContainer}>
            <Button onClick={handleEditarDatos} className={styles.editarDatos}>
              Editar mis datos
            </Button>
            <Button
              onClick={handleCerrarSeccion}
              className={styles.cerrarSesion}
            >
              cerrar sesion
            </Button>
          </div>
          {ordenes.length > 0 ? (
            <OrdenesUsuario ordenes={ordenes} />
          ) : (
            <p style={{ padding: "1rem" }}>No hay órdenes registradas.</p>
          )}
        </div>
      </div>
      {mostrarModalEditar && (
        <ModalEditarDatosUsuario
          usuario={usuario}
          onClose={() => setMostrarModalEditar(false)}
        />
      )}
    </div>
  );
};
