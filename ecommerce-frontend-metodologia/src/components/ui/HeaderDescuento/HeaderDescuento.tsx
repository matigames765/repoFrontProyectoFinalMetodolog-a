import { LogIn } from "lucide-react";
import styles from "./HeaderDescuento.module.css";
import { useNavigate } from "react-router";

export const HeaderDescuento = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <div className={styles.containerPrincipalHeaderDescuento}>
      <div className={styles.containerTitulo}>
        <h3 className={styles.textDescuento}>
          6 Cuotas sin interes - 20% OFF TRANSFERENCIA
        </h3>
      </div>
      <div className={styles.containerLogin}>
        <LogIn size={20} className={styles.loginLogo} />
        <button className={styles.loginButton} onClick={handleLogin}>
          Iniciar Sesion
        </button>
      </div>
    </div>
  );
};
