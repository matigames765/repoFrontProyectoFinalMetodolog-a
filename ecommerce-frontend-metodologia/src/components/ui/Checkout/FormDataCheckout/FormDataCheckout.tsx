import { useState } from "react";
import { HeaderFormCheckout } from "../HeaderFormCheckout/HeaderFormCheckout";
import styles from "./FormDataCheckout.module.css";

export const FormDataCheckout = () => {
  const [actualStep, setActualStep] = useState<"datos" | "tarjeta">("datos");
  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    setActualStep("tarjeta");
  };
  return (
    <div>
      <HeaderFormCheckout />

      <div className={styles.containerPrincipalFormCheckout}>
        <h4 className={styles.titlecheckoutForm}>
          {actualStep === "datos" ? "Ingresa tus datos" : "Datos de la tarjeta"}
        </h4>

        {/* Formulario para datos del usuario */}
        <div className={styles.containerForm}>
          {actualStep === "datos" ? (
            <form className={styles.formGroup}>
              <div className={styles.containerInput}>
                <label htmlFor="emailUser">Email</label>
                <input
                  type="email"
                  id="emailUser"
                  required
                  placeholder="tuemail@email.com"
                  name="emailUser"
                  className={styles.inputFormCheckout}
                />
              </div>

              <div className={styles.containerInput}>
                <label htmlFor="direccion">Dirección</label>
                <input
                  type="text"
                  id="direccion"
                  required
                  placeholder="Calle cualquiera xx"
                  name="direccion"
                  className={styles.inputFormCheckout}
                />
              </div>

              <div className={styles.buttonContainer}>
                <button
                  type="submit"
                  className={styles.buttonNext}
                  onClick={handleNextStep}
                >
                  Siguiente
                </button>
              </div>
            </form>
          ) : (
            //Formulario para datos de tarjeta
            <form className={styles.formGroup}>
                <div className={styles.containerInput}>
                <label htmlFor="name">Nombre del titular:</label>
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="Ingresar tal cual en la tarjeta"
                  name="name"
                  className={styles.inputFormCheckout}
                />
              </div>
              <div className={styles.containerInput}>
                <label htmlFor="cardNumber">Numeros de tarjeta:</label>
                <input
                  type="text"
                  id="cardNumber"
                  required
                  placeholder="XXXX-XXXX-XXXX-XXXX"
                  name="cardNumber"
                  className={styles.inputFormCheckout}
                />
              </div>
              <div className={styles.containerInput}>
                <label htmlFor="cardDueDate">vencimiento:</label>
                <input
                  type="text"
                  id="cardDueDate"
                  required
                  placeholder="MM-AA"
                  name="cardDueDate"
                  className={styles.inputFormCheckout}
                />
              </div>
              <div className={styles.containerInput}>
                <label htmlFor="cardCVV">Codigo de seguridad:</label>
                <input
                  type="text"
                  id="cardCVV"
                  required
                  placeholder="CVV"
                  name="cardCVV"
                  className={styles.inputFormCheckout}
                />
              </div>

              <div className={styles.containerInput}>
                <label htmlFor="direccion">Dirección</label>
                <input
                  type="text"
                  id="direccion"
                  required
                  placeholder="Calle cualquiera xx"
                  name="direccion"
                  className={styles.inputFormCheckout}
                />
              </div>

              <div className={styles.buttonContainer}>
                <button
                  type="submit"
                  className={styles.buttonNext}
                  onClick={handleNextStep}
                >
                  Siguiente Paso
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
