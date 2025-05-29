import { ChangeEvent, FC, FormEvent, useState } from 'react'
import { FloatingLabel, Form, Modal, Container, Button, Row, Col } from 'react-bootstrap'
import { IRegisterUser } from '../types'
import { registerController } from '../Token/getToken'
import { tokenStore } from '../Token/tokenStore'

interface IRegister {
    show: boolean
    handleClose: VoidFunction
}



const estadoInical: IRegisterUser = {
    nombre: "",
    contraseña: "",
    emial: "",
    dni: ""
}

const Register: FC<IRegister> = ({ show, handleClose }) => {

    const setToken = tokenStore((state) => state.setToken);

    const [formValues, setFormValues] = useState<IRegisterUser>(estadoInical)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValues((prev) => ({ ...prev, [`${name}`]: value }))
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        const data = await registerController(formValues);
        if (data) {
            console.log(data)
            setToken(data)
        }
        handleClose()
    }


    return (
        <Modal size="lg" show={show} onHide={handleClose} centered>
            <Form onSubmit={handleSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title className="w-100 text-center">
                        Register
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" >
                                    <FloatingLabel label="nombre">
                                        <Form.Control
                                            value={formValues.nombre}
                                            onChange={handleChange}
                                            type="text"
                                            placeholder="nombre"
                                            name="nombre"
                                            required />
                                    </FloatingLabel>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <FloatingLabel label="email">
                                        <Form.Control 
                                            value={formValues.emial}
                                            onChange={handleChange}
                                            type="text" 
                                            placeholder="emial" 
                                            name="emial"
                                            required/>
                                    </FloatingLabel>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" >
                                    <FloatingLabel label="contraseña">
                                        <Form.Control
                                            value={formValues.contraseña}
                                            onChange={handleChange}
                                            type="text"
                                            placeholder="contraseña"
                                            name="contraseña"
                                            required />
                                    </FloatingLabel>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <FloatingLabel label="dni">
                                        <Form.Control 
                                            value={formValues.dni}
                                            onChange={handleChange}
                                            type="text" 
                                            placeholder="dni" 
                                            name="dni"
                                            required />
                                    </FloatingLabel>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Container>

                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose} variant="secondary">
                        cerrar
                    </Button>
                    <Button variant="primary" type="submit">
                        Completar registro
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}

export default Register
