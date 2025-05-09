import { useShallow } from "zustand/shallow"
import { direccionStore } from "../../store/Usuario/direccionStore"
import { getAllDirecciones } from "../../http/Usuario/direccion"

export const useDirecciones = () => {

    // Traemos las variables y acciones de la store de dirección
    const { direcciones, setArrayDirecciones } = direccionStore(useShallow((state) => ({
      direcciones: state.direcciones,
      setArrayDirecciones: state.setArrayDirecciones
    })))
  
    // Traemos las direcciones en el hook
    const getDireccionesHook = async () => {
      try {
        const direcciones = await getAllDirecciones()
        if (direcciones) setArrayDirecciones(direcciones)
        return direcciones
      } catch (error) {
        console.log("Error en getDireccionesHook: " + error)
      }
    }
  
    return {
      getDireccionesHook,
      direcciones
    }
  }
  