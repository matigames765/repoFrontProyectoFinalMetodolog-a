import { FormRegister } from "../../ui/ModalRegister/FormRegister";
import styles from "./RegisterScreen.module.css";

export const RegisterScreen = () => {
  return (
    <div className={styles.registerContainer}>
      <h1 className={styles.titleRegisterEcommerce}>ClothesShopMendoza</h1>
      <h2>Registrate</h2>
      <FormRegister />
    </div>
  );
};
