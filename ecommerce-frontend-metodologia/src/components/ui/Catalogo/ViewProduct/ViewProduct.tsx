import { FC } from 'react'
import { Button, Col, Container, Form, Modal, Row } from 'react-bootstrap'
import { IDetalleProductos } from "../../../../types/Producto/IDetalleProducto";

interface IViewProduct {
    show: boolean
    detalle: IDetalleProductos
    handleClose: VoidFunction
}

const ViewProduct: FC<IViewProduct> = ({ show, detalle, handleClose }) => {

    // Si el detalleProducto es null o undefined no se muestra el modal
    if (detalle == null) {
        return;
    }
    return (
        // importamos un modal de react-boostrap para generar un modal, y nesesita una variable booleana para mostrarse y una voidFunction para cerrarlo
        <Modal show={show} onHide={handleClose}>
            {/* // esta es la cabecera del modal  */}
            <Modal.Header closeButton>
                <Modal.Title>Detalle del Producto</Modal.Title>
            </Modal.Header>
            {/* Este es el cuerpo de modal */}
            <Modal.Body>
                {/* Contiene un container para hacer un grid a la imagen y los texto */}
                <Container>
                    {/* El row ayusta el grid dependiendo de la cantidad de columnas que tenga*/}
                    <Row>
                        {/* Tiene 2 columnas una para la imagen y otra para los atributos */}
                        <Col>
                            <img
                                src={detalle.imagenProducto?.url || "https://via.placeholder.com/200"}
                                alt={detalle.imagenProducto?.alt || "Imagen no disponible"}
                                width="100%"
                                height="90%"
                            />
                        </Col>
                        <Col>
                            <h6>Talles:</h6>
                            <Form.Select aria-label="talles">
                                <option>Seleccionar talle</option>
                                {
                                    detalle.tallesDetalleProductos.map((talle) =>
                                        <option key={talle.id} value={talle.id}>{talle.talle}</option>
                                    )
                                }
                            </Form.Select>
                            <h6><b>Stock: </b>{detalle.stock}</h6>
                            <h6><b>Color: </b>{detalle.color}</h6>
                            
                            {detalle.precio && (
                                <>
                                    <h6><b>Precio compra: </b>${detalle.precio.precioCompra}</h6>
                                    <h6><b>Precio venta: </b>${detalle.precio.precioVenta}</h6>
                                </>
                            )}
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={handleClose}>
                    Cerrar
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ViewProduct
