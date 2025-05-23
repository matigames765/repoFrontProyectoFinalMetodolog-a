import { FormLogin } from "../../ui/FormLogin/FormLogin";
import { HeaderDescuento } from "../../ui/HeaderDescuento/HeaderDescuento";
import { NavBarHome } from "../../ui/Landing/NavBarHome/NavBarHome";

import styles from "./LoginScreen.module.css";

export const LoginScreen = () => {
  
  return (
    <div className={styles.loginContainer}>
      <HeaderDescuento />
      <NavBarHome/>
      <FormLogin />
    </div>
  );
};
