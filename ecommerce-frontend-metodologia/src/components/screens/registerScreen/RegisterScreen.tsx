import { FormRegister } from "../../ui/FormRegister/FormRegister";
import { HeaderDescuento } from "../../ui/HeaderDescuento/HeaderDescuento";
import { NavBarHome } from "../../ui/Landing/NavBarHome/NavBarHome";

import styles from "./RegisterScreen.module.css";

export const RegisterScreen = () => {
  
  return (
    <div className={styles.registerContainer}>
      <HeaderDescuento/>
      <NavBarHome/>
      <FormRegister />
    </div>
  );
};
