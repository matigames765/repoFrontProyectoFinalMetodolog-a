import axios from "axios";
import { IProducto } from "../../types/Producto/IProducto";
import { IDetalleProductos } from "../../types/Producto/IDetalleProducto";

//obtener productos
export const getAllProductos = async (): Promise<IProducto[] | undefined> => {
  try {
    const response = await axios.get<IProducto[]>(
      "http://localhost:9000/producto"
    );
    return response.data;
  } catch (error) {
    console.log(
      "Error al traer los productos en getAllProductos http: " + error
    );
  }
};

export const crearProducto = async(producto: IProducto) => {
  //const token = localStorage.getItem("authentication")

    try{
        const response = await axios.post<IProducto>('http://localhost:9000/producto', producto, {headers: {
          "Content-Type": "application/json",
          //"Authorization": `Bearer ${token}`
        }})

        return response.data
    }catch(error){
        console.log('Error en crearProducto http: ' + error)
    }
}

export const addDetalleProductoOnProducto = async(detalleProducto: IDetalleProductos, idProducto: number) => {
  try{
    const response = await axios.put<IProducto>(`http://localhost:9000/producto/${idProducto}/agregar-detalle`, detalleProducto)

    return response.data
  }catch(error){
    console.log("Error en addDetalleProductoOnProducto http: " + error)
  }
}

export const editarProducto = async(productoActualizado: IProducto) => {
    try{
        const response = await axios.put<IProducto>('http://localhost:9000/producto', {productoActualizado})

        return response.data
    }catch(error){
        console.log('Error en editarProducto http: ' + error)
    }
}

export const deleteProducto = async(id: number) => {
    try{
        await axios.delete(`http://localhost:9000/detalleProducto/:${id}`)
    }catch(error){
        console.log('Error en eliminar deleteProducto http: ' + error)
    }
}


