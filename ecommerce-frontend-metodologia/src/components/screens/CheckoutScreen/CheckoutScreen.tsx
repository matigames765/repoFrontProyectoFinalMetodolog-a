import { FormDataCheckout } from "../../ui/Checkout/FormDataCheckout/FormDataCheckout";
import { NavBarCheckout } from "../../ui/Checkout/NavBarCheckout/NavBarCheckout";
import styles from "./CheckoutScreen.module.css"

export const CheckoutScreen = () => {
  return (
    <div className={styles.containerGeneral} >
      <NavBarCheckout />
      <FormDataCheckout />
    </div>
  );
};
