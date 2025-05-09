import { useShallow } from "zustand/shallow"
import { ordenCompraDetalleStore } from "../../store/Usuario/ordenCompraDetalle"
import { getAllOrdenesCompraDetalles } from "../../http/Usuario/ordencompradetalle"

export const useOrdenCompraDetalles = () => {

    // Traemos las variables y acciones de la store de ordenCompraDetalle
    const { ordenesCompraDetalle, setArrayOrdenesCompraDetalle } = ordenCompraDetalleStore(useShallow((state) => ({
      ordenesCompraDetalle: state.ordenesCompraDetalle,
      setArrayOrdenesCompraDetalle: state.setArrayOrdenesCompraDetalle
    })))
  
    // Traemos los ordenCompraDetalles en el hook
    const getOrdenCompraDetallesHook = async () => {
      try {
        const ordenCompraDetalles = await getAllOrdenesCompraDetalles()
        if (ordenCompraDetalles) setArrayOrdenesCompraDetalle(ordenCompraDetalles)
        return ordenCompraDetalles
      } catch (error) {
        console.log("Error en getOrdenCompraDetallesHook: " + error)
      }
    }
  
    return {
      getOrdenCompraDetallesHook,
      ordenesCompraDetalle
    }
  }
  