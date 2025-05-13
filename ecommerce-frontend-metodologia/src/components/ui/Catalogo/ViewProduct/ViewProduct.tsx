import { FC } from 'react'
import { Button, Col, Container, Form, Modal, Row } from 'react-bootstrap'
import { IDetalleProductos } from "../../../../types/Producto/IDetalleProducto";

interface IViewProduct {
    show: boolean
    detalle: IDetalleProductos
    handleClose: VoidFunction
}

const ViewProduct: FC<IViewProduct> = ({ show, detalle, handleClose }) => {

    if (detalle == null) {
        return;
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Detalle del Producto</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Row>
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
