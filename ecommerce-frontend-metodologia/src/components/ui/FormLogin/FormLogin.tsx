import { useNavigate } from "react-router";
import styles from "./FormLogin.module.css";
import { ILogin } from "../../../types/authenticate/ILogin";
import { ChangeEvent, FormEvent, useState } from "react";
import { loginController } from "../../../http/authenticate/authenticate";
import { jwtDecode } from "jwt-decode";
import { handleUsuario } from "../../../hooks/UsuarioActivo/handleUsuario";
import { usuarioStore } from "../../../store/Usuario/usuarioStore";
import { useShallow } from "zustand/shallow";
import { toast } from "react-toastify";

const estadoInicial: ILogin = {
  nombre: "",
  contraseña: "",
};

export const FormLogin = () => {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState<ILogin>(estadoInicial);
  const { usuarios, setUsuarioActivo } = usuarioStore(
    useShallow((state) => ({
      usuarios: state.usuarios,
      setUsuarioActivo: state.setUsuarioActivo,
    }))
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [`${name}`]: value }));
  };

  const handleRegister = () => {
    navigate("/register");
  };

  const handleLanding = () => {
    navigate("/");
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const data = await loginController(formValues);
    if (data) {
      localStorage.setItem("authentication", data);
      console.log("Token en el login: ", data);

      const payload = jwtDecode(data);
      const nombrePayload = payload.sub;

      handleUsuario(nombrePayload!, usuarios, setUsuarioActivo);

      // con esta variable noExiste verificamos si el usuario ingresado existe
      // sino no se cierra el
      console.log("usuario: ", usuarios);
      const usuarioExiste = usuarios.find((usuario) => {
        return usuario.nombre === formValues.nombre;
      });
      if (usuarioExiste) {
        handleLanding();
      } else {
        toast.error("Credenciales incorrectas");
        return;
      }
    }
  };

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
              placeholder="Ingrese su nombre de usuario"
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
              <button type="submit" className={styles.buttonEntrar}>
                Iniciar sesion
              </button>
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
