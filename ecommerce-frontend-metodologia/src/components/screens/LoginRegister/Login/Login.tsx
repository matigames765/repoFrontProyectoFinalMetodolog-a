import { ChangeEvent, FC, FormEvent, useState } from 'react'
import { FloatingLabel, Form, Modal, Button } from 'react-bootstrap'
import { IloginUser } from '../types'
import { loginController } from '../Token/getToken'
import { tokenStore } from '../Token/tokenStore'


interface ILogin {
    show: boolean
    handleClose: VoidFunction
}

const estadoInical: IloginUser = {
    nombre: "",
    contraseña: ""
}

const Login: FC<ILogin> = ({ show, handleClose }) => {

    const setToken = tokenStore((state) => state.setToken);

    const [formValues, setFormValues] = useState<IloginUser>(estadoInical)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValues((prev) => ({ ...prev, [`${name}`]: value }))
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        const data = await loginController(formValues)
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
                    <Modal.Title className="w-100 text-center">Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div>

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
                            <FloatingLabel label="fecha contraseña">
                                <Form.Control
                                    value={formValues.contraseña}
                                    onChange={handleChange}
                                    type="text"
                                    placeholder="contraseña"
                                    name="contraseña"
                                    required />
                            </FloatingLabel>
                        </Form.Group>

                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose} variant="secondary">
                        cerrar
                    </Button>
                    <Button variant="primary" type="submit">
                        Iniciar Seccion
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}

export default Login
