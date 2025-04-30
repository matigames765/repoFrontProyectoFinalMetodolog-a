import styles from './FormLogin.module.css';

export const FormLogin = () => {
  return (
    <div className={styles.containerPrincipalFormLogin}>
        <div className={styles.containerForm}>
        <form>
            <div className={styles.containerElementsForm}>
                <label htmlFor='nombreUsuario'>Nombre usuario</label>
                <input type='text' id='nombreUSuario' required placeholder='Ingrese su nombre de usuario' name='nombreUsuario' className={styles.inputFormLogin}/>
                <label htmlFor='contraseña'>Ingrese su contraseña</label>
                <input type='password' id='contraseña' required placeholder='Ingrese su contraseña' name='contraseña' className={styles.inputFormLogin}/>
                <button className={styles.buttonEntrar}>Entrar</button>
            </div>
        </form>
        </div>
    </div>
  )
}
