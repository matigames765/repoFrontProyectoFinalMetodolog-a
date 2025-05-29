import { useNavigate } from "react-router";
import styles from "./FormRegister.module.css";

export const FormRegister = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <div className={styles.containerPrincipalFormRegister}>
      <h4>Crear cuenta</h4>
      <h6>
        Comprá más rápido y llevá el control de tus pedidos, ¡en un solo lugar!
      </h6>
      <div className={styles.containerForm}>
        <form>
          <div className={styles.containerElementsForm}>
            <label htmlFor="name">Nombre y apellido</label>
            <input
              type="text"
              id="nameUser"
              required
              placeholder="Ej.: Luciano Martinez"
              name="nameUser"
              className={styles.inputFormRegister}
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              required
              placeholder="Ej.: tunombre@email.com"
              name="email"
              className={styles.inputFormRegister}
            />
            <label htmlFor="telefono">Telefono (opcional)</label>
            <input
              type="number"
              id="telefono"
              placeholder="Ej.: 2612345678"
              name="telefono"
              className={styles.inputFormRegister}
            />
            <label htmlFor="contraseña">Crear contraseña</label>
            <input
              type="text"
              id="contraseña"
              required
              placeholder="Ej.:tucontraseña"
              name="contraseña"
              className={styles.inputFormRegister}
            />
            <label htmlFor="contraseñaRepetida">Confirmar contraseña</label>
            <input
              type="text"
              id="contraseñaRepetida"
              required
              placeholder="Ej.:tucontraseña"
              name="contraseñaRepetida"
              className={styles.inputFormRegister}
            />
            <button className={styles.buttonRegistrarme}>Crear cuenta</button>
            <div className={styles.register}>
              <h5>¿Ya tenés una cuenta?</h5>
              <button onClick={handleLogin}>Inicia sesión</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
