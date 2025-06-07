import { Check, CreditCard, Truck } from "lucide-react";
import styles from "./HeaderFormCheckout.module.css";

export const HeaderFormCheckout = () => {
  return (
    <div className={styles.containerGralCheckoutForm}>
      <div className={styles.containerHeader}>
        <div className={styles.containerSteps}>
          <Check />
        </div>

        <div className={styles.conector}>
          <div className={styles.progressBar}></div>
        </div>

        <div className={styles.containerSteps}>
          <Truck />
        </div>

        <div className={styles.conector}>
          <div className={styles.progressBar}></div>
        </div>

        <div className={styles.containerSteps}>
          <CreditCard />
        </div>
      </div>
    </div>
  );
};
