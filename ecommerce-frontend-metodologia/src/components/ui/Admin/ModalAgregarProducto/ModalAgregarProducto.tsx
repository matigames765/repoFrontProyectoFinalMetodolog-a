import { Modal } from "react-bootstrap";
import { FormAgregarProducto } from "./FormAgregarProducto";
import { toast } from "react-toastify";
import { IProducto } from "../../../../types/Producto/IProducto";
import { TipoProducto } from "../../../../types/Producto/TipoProducto";

const initialState: IProducto = {
  id: 0,
  nombre: "",
  categoria: {
    id: 0,
    nombre: "",
    categoriaPadre: null,
  },
  tipoProducto: "" as TipoProducto,
  sexo: "",
  detallesProductos: {
    id: 0,
    tallesDetalleProductos: [],
    stock: 0,
    color: "",
    estado: true,
    precio: {
      id: 0,
      precioCompra: 0,
      precioVenta: 0,
      descuento: {
        id: 0,
        porcentaje: 0,
        fechaInicio: new Date(),
        fechaFin: new Date(),
      },
    },
    imagenProducto: {
      id: 0,
      url: "",
      alt: "",
    },
  },
};

interface ModalAgregarProductoProps {
  show: boolean;
  onClose: () => void;
}

export const ModalAgregarProducto = ({
  show,
  onClose,
}: ModalAgregarProductoProps) => {
  const handleFormSubmit = async (producto: IProducto) => {
    //lamar a la api para guardar

    console.log("Producto guardado!", producto);
    toast.success("Producto guardado!");
    onClose();
  };
  return (
    <Modal show={show} onHide={onClose} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Añadir Producto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormAgregarProducto
          initialState={initialState}
          onSubmit={handleFormSubmit}
        />
      </Modal.Body>
    </Modal>
  );
};
