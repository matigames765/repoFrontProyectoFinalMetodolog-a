
import { FormLogin } from '../../ui/FormLogin/FormLogin'
import styles from './LoginScreen.module.css'

export const LoginScreen = () => {
  return (
    <div>
        <h1 className={styles.titleLoginEcommerce}>ClothesShopMendoza</h1>
        <h2 className={styles.titleLoginLogin}>Login</h2>
        <FormLogin />
    </div>
  )
}
