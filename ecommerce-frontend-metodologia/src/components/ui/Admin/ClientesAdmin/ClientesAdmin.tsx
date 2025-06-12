import { useEffect } from "react";
import { useUsuarios } from "../../../../hooks/Usuario/useUsuario";
import { useUsuarioDirecciones } from "../../../../hooks/Usuario/useUsuarioDireccion";
import { usuarioStore } from "../../../../store/Usuario/usuarioStore";
import styles from "./ClientesAdmin.module.css";

export const ClientesAdmin = () => {
  const {usuarios, getUsuariosHook} = useUsuarios()

  useEffect(() => {
    getUsuariosHook()
  }, [])
  return (
    <>
      <div className={styles.containerPrincipal}>
        <div className={styles.divClientes}>
          <div className={styles.idCliente}>
            <h3 className={styles.tituloColumna}>ID Cliente</h3>
            {usuarios.map((usuario) => usuario.rol === "CLIENTE" && <p>{usuario.id}</p>)}
          </div>
          <div className={styles.pais}>
            <h3 className={styles.tituloColumna}>Nombre</h3>
            {usuarios.map((usuario) => usuario.rol === "CLIENTE" && <p>{usuario.nombre}</p>)}
          </div>
          <div className={styles.domicilio}>
            <h3 className={styles.tituloColumna}>Email</h3>
            {usuarios.map((usuario) => usuario.rol === "CLIENTE" && <p>{usuario.email}</p>)}
          </div>
          <div className={styles.dni}>
            <h3 className={styles.tituloColumna}>DNI</h3>
            {usuarios.map((usuario) => usuario.rol === "CLIENTE" && <p>{usuario.dni}</p>)}
          </div>
        </div>
      </div>
    </>
  );
};
