import { ChangeEvent, FC, FormEvent, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap"
import { IRegister } from "../../../../types/authenticate/IRegister";
import { crearUsuarioAdmin } from "../../../../http/Usuario/usuario";


interface ModalCrearAdminProps {
    show: boolean;
    onClose: () => void
}
export const ModalCrearAdmin: FC<ModalCrearAdminProps> = ({show, onClose}) => {

    const [formValuesUsuarioAdmin, setFormValuesUsuarioAdmin] = useState<IRegister>()
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target

        setFormValuesUsuarioAdmin((prev) => ({...prev!, [name]: value}))
    }
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()

        crearUsuarioAdmin(formValuesUsuarioAdmin!)

        onClose()
    }
    
  return (
        <Modal show={show} onHide={onClose} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Agregar Detalle Producto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="nombre">
        <Form.Label>Nombre de usuario</Form.Label>
        <Form.Control
          type="text"
          name="nombre"
          value={formValuesUsuarioAdmin?.nombre}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="text"
          name="email"
          value={formValuesUsuarioAdmin?.email}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="dni">
        <Form.Label>DNI</Form.Label>
        <Form.Control
          type="number"
          name="dni"
          value={formValuesUsuarioAdmin?.dni}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="contraseña">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control
          type="text"
          name="contraseña"
          value={formValuesUsuarioAdmin?.contraseña}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Crear Usuario Admin
      </Button>
    </Form>

      </Modal.Body>
    </Modal>
  )
}
