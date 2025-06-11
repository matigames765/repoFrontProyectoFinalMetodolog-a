import { FC } from "react";
import styles from "./PopUpLogin.module.css"
import { X } from "lucide-react";
import { IUsuario } from "../../../types/Usuario/IUsuario";
import { usuarioStore } from "../../../store/Usuario/usuarioStore";

type ICardPopUp = {
    handleCloseModal: () => void;
    visible: boolean;
    usuario: IUsuario
};

export const PopUpLogin: FC<ICardPopUp> = ({ handleCloseModal, visible, usuario }) => {

    const setUsuarioActivo = usuarioStore((state) => state.setUsuarioActivo);

    const handleCerrarSeccion = async() => {
        if (usuario){
            setUsuarioActivo(null)
            localStorage.setItem("authentication", "")
        }
        handleCloseModal()
    }
 
    return (
        <div
            className={`${styles.overlay} ${visible ? styles.show : ""}`}
            onClick={handleCloseModal}>
            <div className={`${styles.popupCart} ${visible ? styles.show : ""}`}
                onClick={(e) => e.stopPropagation()}>
                <div className={styles.popupContent}>
                    <h5>Usuario</h5>
                    <button className={styles.navbarBoton} onClick={handleCloseModal} ><X size={40} /></button>
                </div>
                <div className={styles.usuarioContent}>
                    <p><b>Usuario: </b>{usuario ? (usuario.nombre) : ("")}</p>
                    <p><b>email: </b>{usuario ? (usuario.email) : ("")}</p>
                    <button onClick={handleCerrarSeccion} className={styles.cerrarSeccion}><b>cerrar sesion</b></button>
                </div>
            </div>
        </div>
    );
};