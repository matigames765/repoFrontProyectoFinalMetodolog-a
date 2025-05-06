import { FormLogin } from "../../ui/FormLogin/FormLogin";
import styles from "./LoginScreen.module.css";

export const LoginScreen = () => {
  return (
    <div className={styles.loginContainer}>
      <h1 className={styles.titleLoginEcommerce}>ClothesShopMendoza</h1>
      <h2>Login</h2>
      <FormLogin />
    </div>
  );
};
