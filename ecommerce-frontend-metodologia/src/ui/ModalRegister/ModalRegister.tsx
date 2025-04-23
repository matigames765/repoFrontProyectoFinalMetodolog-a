import styles from './ModalRegister.module.css'

export const ModalRegister = () => {
  return (
    <div className={styles.containerPrincipalModalRegister}>
        <div className={styles.containerForm}>
        <form>
            <div className={styles.containerElementsForm}>
                <label htmlFor='email'>Crear correo electronico</label>
                <input type='email' id='email' required placeholder='Ingrese su correo electronico' name='email' className={styles.inputFormRegister}/>
                <label htmlFor='nombreUsuario'>Crear nombre de usuario</label>
                <input type='text' id='nombreUsuario' required placeholder='Ingrese su nombre de usuario' name='nombreUsuario' className={styles.inputFormRegister}/>
                <label htmlFor='contraseña'>Crear contraseña</label>
                <input type='text' id='contraseña' required placeholder='Ingrese su nombre de usuario' name='nombreUsuario' className={styles.inputFormRegister}/>
                <label htmlFor='contraseñaRepetida'>Crear contraseña repetida</label>
                <input type='text' id='contraseñaRepetida' required placeholder='Ingrese de vuelta su contraseña' name='contraseñaRepetida' className={styles.inputFormRegister}/>
                <button className={styles.buttonRegistrarme}>Registrarme</button>
            </div>
        </form>
        </div>
    </div>
  )
}
