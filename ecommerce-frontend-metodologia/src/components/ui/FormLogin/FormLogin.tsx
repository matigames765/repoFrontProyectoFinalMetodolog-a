import { useNavigate } from "react-router";
import styles from "./FormLogin.module.css";

export const FormLogin = () => {
  const navigate = useNavigate();
  const handleRegister = () =>{
    navigate("/register");
  }
  return (
    <div className={styles.containerPrincipalFormLogin}>
      <h4 className={styles.titleLoginEcommerce}>Iniciar sesion</h4>
      <div className={styles.containerForm}>
        <form>
          <div className={styles.containerElementsForm}>
            <label htmlFor="nemailUsuario">Email</label>
            <input
              type="email"
              id="emailUSuario"
              required
              placeholder="Ej.: tuemail@email.com"
              name="emailUsuario"
              className={styles.inputFormLogin}
            />
            <label htmlFor="contraseña">Contraseña</label>
            <input
              type="password"
              id="contraseña"
              required
              placeholder="Ej.: tucontraseña"
              name="contraseña"
              className={styles.inputFormLogin}
            />
            <div className={styles.buttonContainer}>
              <button className={styles.buttonEntrar}>Iniciar sesion</button>
            </div>
            <div className={styles.login}>
              <h5>¿No tenés una cuenta?</h5>
              <button onClick={handleRegister}>Registrate</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
