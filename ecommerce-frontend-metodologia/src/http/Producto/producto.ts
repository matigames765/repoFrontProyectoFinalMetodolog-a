import axios from "axios";
import { IProducto } from "../../types/Producto/IProducto";

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

export const crearProducto = async (producto: IProducto): Promise<IProducto | undefined> => {
  const token = localStorage.getItem("authentication")

  try {
    const response = await axios.post<IProducto>(
      'http://localhost:9000/producto',
      producto, // este es el body directamente, sin JSON.stringify
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      }
    )
    console.log("Antes: ", producto)
    console.log("Despues: ", response.data)
    return response.data
  } catch (error) {
    console.error('Error en crearProducto http: ' + error)
  }
}


export const editarProducto = async (productoActualizado: IProducto) => {
  try {
    const response = await axios.put<IProducto>('http://localhost:9000/producto', { productoActualizado })

    return response.data
  } catch (error) {
    console.log('Error en editarProducto http: ' + error)
  }
}

export const deleteProducto = async (id: number) => {
  try {
    await axios.delete(`http://localhost:9000/detalleProducto/:${id}`)
  } catch (error) {
    console.log('Error en eliminar deleteProducto http: ' + error)
  }
}


