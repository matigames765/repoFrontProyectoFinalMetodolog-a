import { useNavigate } from "react-router";
import styles from "./FormRegister.module.css";
import { IUsuario } from "../../../types/Usuario/IUsuario";
import { IRol } from "../../../types/Usuario/IRol";
import { ChangeEvent, FormEvent, useState } from "react";
import { registerController } from "../../../http/authenticate/authenticate";

const estadoInicial: IUsuario = {
  id: 0,
  nombre: "",
  contraseña: "",
  rol: IRol.CLIENTE,
  email: "",
  dni: 0,

}

export const FormRegister = () => {
  const navigate = useNavigate();

  const [ formValues, setFormValues ] = useState<IUsuario>(estadoInicial)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormValues((prev) => ({...prev, [`${name}`]: value}))
  }

  const handleLanding = () => {
    navigate("/")
  }

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSubmit = async(e: FormEvent) => {
    e.preventDefault()
    const data = await registerController(formValues)
    if (data) {
      const token = localStorage.setItem("authentication", data.token)
      console.log("Token en el register: ", token)
    }
    handleLanding()
  }

  return (
    <div className={styles.containerPrincipalFormRegister}>
      <h4>Crear cuenta</h4>
      <h6>
        Comprá más rápido y llevá el control de tus pedidos, ¡en un solo lugar!
      </h6>
      <div className={styles.containerForm}>
        <form onSubmit={handleSubmit}>
          <div className={styles.containerElementsForm}>
            <label htmlFor="nombre">nombre de usuario</label>
            <input
              type="text"
              id="nombre"
              required
              placeholder="Ej.: Luciano Martinez"
              name="nombre"
              value={formValues.nombre}
              onChange={handleChange}
              className={styles.inputFormRegister}
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              required
              placeholder="Ej.: tunombre@email.com"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              className={styles.inputFormRegister}
            />
            <label htmlFor="dni">Telefono (opcional)</label>
            <input
              type="number"
              id="dni"
              placeholder="Ej.: 45234798"
              name="dni"
              value={formValues.dni}
              onChange={handleChange}
              className={styles.inputFormRegister}
            />
            <label htmlFor="contraseña">Crear contraseña</label>
            <input
              type="text"
              id="contraseña"
              required
              placeholder="Ej.:tucontraseña"
              name="contraseña"
              value={formValues.contraseña}
              onChange={handleChange}
              className={styles.inputFormRegister}
            />
            {/* <label htmlFor="contraseñaRepetida">Confirmar contraseña</label>
            <input
              type="text"
              id="contraseñaRepetida"
              required
              placeholder="Ej.:tucontraseña"
              name="contraseñaRepetida"
              className={styles.inputFormRegister}
            /> */}
            <button type='submit' className={styles.buttonRegistrarme}>Crear cuenta</button>
            <div className={styles.register}>
              <h5>¿Ya tenés una cuenta?</h5>
              <button onClick={handleLogin}>Inicia sesión</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
