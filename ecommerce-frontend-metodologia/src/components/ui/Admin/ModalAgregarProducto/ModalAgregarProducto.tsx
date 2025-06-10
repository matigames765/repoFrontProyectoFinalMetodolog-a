import { Modal } from "react-bootstrap";
import { FormAgregarProducto } from "./FormAgregarProducto";
import { IProducto } from "../../../../types/Producto/IProducto";
import { TipoProducto } from "../../../../types/Producto/TipoProducto";
import { ICategoria } from "../../../../types/Producto/ICategoria";
import { useProductos } from "../../../../hooks/Producto/useProductos";

const initialStateCategoria: ICategoria = {
  nombre: ""
}

const initialStateProducto: IProducto = {
  nombre: "",
  categoria: {
    id: undefined,
    nombre: ""
  },
  tipoProducto: "" as TipoProducto,
  seccion: "",
  detallesProductos: []
};

interface ModalAgregarProductoProps {
  show: boolean;
  onClose: () => void;
}

export const ModalAgregarProducto = ({
  show,
  onClose,
}: ModalAgregarProductoProps) => {

  const {crearProductoHook} = useProductos()

  const handleFormSubmit = async (producto: IProducto) => {
    
    crearProductoHook(producto)
    
    onClose();
  };

  return (
    <Modal show={show} onHide={onClose} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Añadir Producto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormAgregarProducto
          initialStateProducto={initialStateProducto}
          initialStateCategoria={initialStateCategoria}
          onSubmit={handleFormSubmit}
        />
      </Modal.Body>
    </Modal>
  );
};
