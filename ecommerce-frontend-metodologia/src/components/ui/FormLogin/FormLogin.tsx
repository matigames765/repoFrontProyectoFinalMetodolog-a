import { useNavigate } from "react-router";
import styles from "./FormLogin.module.css";
import { ILogin } from "../../../types/authenticate/ILogin";
import { ChangeEvent, FormEvent, useState } from "react";
import { loginController } from "../../../http/authenticate/authenticate";

const estadoInicial:ILogin = {
  nombre: "",
  contraseña: ""
}


export const FormLogin = () => {
  const navigate = useNavigate();

  const [ formValues, setFormValues ] = useState<ILogin>(estadoInicial)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormValues((prev) => ({...prev, [`${name}`]: value}))

  }

  const handleRegister = () =>{
    navigate("/register");
  }

  const handleLanding = () => {
    navigate("/")
  }

  const handleSubmit = async(e: FormEvent) => {
    e.preventDefault()
    const data = await loginController(formValues);
    if (data) {
      const token = localStorage.setItem("authentication", data.token)
      console.log("Token en el login: ",token)
    }
    handleLanding()
  }

  return (
    <div className={styles.containerPrincipalFormLogin}>
      <h4 className={styles.titleLoginEcommerce}>Iniciar sesion</h4>
      <div className={styles.containerForm}>
        <form onSubmit={handleSubmit}>
          <div className={styles.containerElementsForm}>
            <label htmlFor="nombre">nombre de usuario</label>
            <input
              type="text"
              id="nombre"
              required
              placeholder="Ej.: tuemail@email.com"
              name="nombre"
              value={formValues.nombre}
              onChange={handleChange}
              className={styles.inputFormLogin}
            />
            <label htmlFor="contraseña">Contraseña</label>
            <input
              type="password"
              id="contraseña"
              required
              placeholder="Ej.: tucontraseña"
              name="contraseña"
              value={formValues.contraseña}
              onChange={handleChange}
              className={styles.inputFormLogin}
            />
            <div className={styles.buttonContainer}>
              <button type="submit" className={styles.buttonEntrar}>Iniciar sesion</button>
            </div>
            <div className={styles.login}>
              <h5>¿No tenés una cuenta?</h5>
              <button onClick={handleRegister}>Registrate</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
