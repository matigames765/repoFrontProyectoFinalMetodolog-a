
import styles from "./HeaderDescuento.module.css";

export const HeaderDescuento = () => {
  return (
    <div className={styles.containerPrincipalHeaderDescuento}>
      <div className={styles.containerTitulo}>
        <h3 className={styles.textDescuento}>
          6 Cuotas sin interes - 20% OFF TRANSFERENCIA
        </h3>
      </div>
    </div>
  );
};
