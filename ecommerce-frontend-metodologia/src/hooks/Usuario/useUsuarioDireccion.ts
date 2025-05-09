import { useShallow } from "zustand/shallow"
import { usuarioDireccionStore } from "../../store/Usuario/usuarioDireccionStore"
import { getAllUsuarioDirecciones } from "../../http/Usuario/usuariodireccion"

export const useUsuarioDirecciones = () => {

    // Traemos las variables y acciones de la store de usuariodireccion
    const { usuariosDireccion, setArrayUsuariosDireccion } = usuarioDireccionStore(useShallow((state) => ({
      usuariosDireccion: state.usuariosDireccion,
      setArrayUsuariosDireccion: state.setArrayUsuariosDireccion
    })))
  
    // Traemos las usuariodirecciones en el hook
    const getUsuarioDireccionesHook = async () => {
      try {
        const usuarioDirecciones = await getAllUsuarioDirecciones()
        if (usuarioDirecciones) setArrayUsuariosDireccion(usuarioDirecciones)
        return usuarioDirecciones
      } catch (error) {
        console.log("Error en getUsuarioDireccionesHook: " + error)
      }
    }
  
    return {
      getUsuarioDireccionesHook,
      usuariosDireccion
    }
  }
  