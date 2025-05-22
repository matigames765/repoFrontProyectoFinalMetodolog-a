import { useShallow } from "zustand/shallow"
import { ordenCompraStore } from "../../store/Usuario/ordenCompra"
import { getAllOrdenesCompra } from "../../http/Usuario/ordencompra"

export const useOrdenesCompra = () => {

    // Traemos las variables y acciones de la store de ordenCompra
    const { ordenesCompra, setArrayOrdenesCompra } = ordenCompraStore(useShallow((state) => ({
      ordenesCompra: state.ordenesCompra,
      setArrayOrdenesCompra: state.setArrayOrdenesCompra
    })))
  
    // Traemos las ordenes de compra en el hook
    const getOrdenesCompraHook = async () => {
      try {
        const ordenesCompra = await getAllOrdenesCompra()
        if (ordenesCompra) setArrayOrdenesCompra(ordenesCompra)
        return ordenesCompra
      } catch (error) {
        console.log("Error en getOrdenesCompraHook: " + error)
      }
    }
  
    return {
      getOrdenesCompraHook,
      ordenesCompra
    }
  }