import { useEffect, useState } from "react";
import styles from "./HeaderDescuento.module.css";

export const HeaderDescuento = () => {
  const mensajes = [
    "6 CUOTAS SIN INTERÉS!",
    "20% OFF TRANSFERENCIA!",
    "ENVÍO GRATIS A PARTIR DE $150.000!",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const nextMessage = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % mensajes.length);
      setFade(true);
    }, 300);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextMessage();
    }, 3300);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.containerPrincipalHeaderDescuento}>
      <div className={styles.containerTitulo}>
        <div
          className={`${styles.textDescuento} ${
            fade ? styles.fadeIn : styles.fadeOut
          }`}
        >
          {mensajes[currentIndex]}
        </div>
      </div>
    </div>
  );
};
