import { FormRegister } from '../../../ui/ModalRegister/FormRegister'
import styles from './RegisterScreen.module.css'

export const RegisterScreen = () => {
  return (
    <div>
        <h1 className={styles.titleRegisterEcommerce}>ClothesShopMendoza</h1>
        <h2 className={styles.titleRegisterRegistrate}>Registrate</h2>
        <FormRegister />
    </div>
  )
}
