import { useNavigate } from "react-router";
import styles from "./FormRegister.module.css";
import { ChangeEvent, FormEvent, useState } from "react";
import { registerController } from "../../../http/authenticate/authenticate";
import { IRegister } from "../../../types/authenticate/IRegister";
import { jwtDecode } from "jwt-decode";
import { handleUsuario } from "../../../hooks/UsuarioActivo/handleUsuario";
import { usuarioStore } from "../../../store/Usuario/usuarioStore";
import { useShallow } from "zustand/shallow";


const estadoInicial: IRegister = {
  nombre: "",
  contraseña: "",
  email: "",
  dni: 0,

}

export const FormRegister = () => {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState<IRegister>(estadoInicial)
const { usuarios, setUsuarioActivo } = usuarioStore(useShallow((state) => ({
    usuarios: state.usuarios,
    setUsuarioActivo: state.setUsuarioActivo
  })))

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormValues((prev) => ({ ...prev, [`${name}`]: value }))
  }

  const handleLanding = () => {
    navigate("/")
  }

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const data = await registerController(formValues)
    if (data) {
      localStorage.setItem("authentication", data)
      console.log("Token en el register: ", data)

      const payload = jwtDecode(data)
      const nombrePayload = payload.sub;
      if (nombrePayload) {
        handleUsuario(nombrePayload, usuarios, setUsuarioActivo)
      }
      
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
            <label htmlFor="dni">Ingrese su Dni</label>
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
