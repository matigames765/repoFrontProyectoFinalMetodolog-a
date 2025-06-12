import { FC, useState } from "react";
import { IUsuario } from "../../../types/Usuario/IUsuario";
import { usuarioStore } from "../../../store/Usuario/usuarioStore";

import styles from "./ModalEditarDatosUsuario.module.css";
import { X } from "lucide-react";
import { Button } from "react-bootstrap";

type Props = {
  usuario: IUsuario;
  onClose: () => void;
};

export const ModalEditarDatosUsuario: FC<Props> = ({ usuario, onClose }) => {
  const { actualizarUsuario } = usuarioStore();

  const [nombre, setNombre] = useState(usuario.nombre);
  const [email, setEmail] = useState(usuario.email);
  const [contrasena, setContrasena] = useState(usuario.contraseña);
  const [loading, setLoading] = useState(false);

  const handleGuardarCambios = async () => {
    setLoading(true);
    const usuarioActualizado: IUsuario = {
      ...usuario,
      nombre,
      email,
      contraseña: contrasena,
    };

    try {
      await actualizarUsuario(usuarioActualizado);
      onClose();
    } catch {
      // El error se maneja en la store
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h3>Editar Usuario</h3>
          <button onClick={onClose}>
            <X size={30} />
          </button>
        </div>
        <div className={styles.body}>
          <label>
            Nombre:
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <Button
            onClick={handleGuardarCambios}
            className={styles.guardarDatos}
          >
            Guardar cambios
          </Button>
        </div>
      </div>
    </div>
  );
};
