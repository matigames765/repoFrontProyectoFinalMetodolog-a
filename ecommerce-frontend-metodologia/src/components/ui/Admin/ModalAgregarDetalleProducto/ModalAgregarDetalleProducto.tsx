import { Button, Modal } from 'react-bootstrap'
import styles from './ModalAgregarDetalleProducto.module.css'
import { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react';
import { IDetalleProductos } from '../../../../types/Producto/IDetalleProducto';
import { IPrecio } from '../../../../types/Producto/IPrecio';
import { IImagenProducto } from '../../../../types/Producto/IImagenProducto';
import { Form } from 'react-bootstrap';
import { usePrecios } from '../../../../hooks/Producto/usePrecios';
import { useImagenesProductos } from '../../../../hooks/Producto/useImagenesProductos';
import { useDetallesProductos } from '../../../../hooks/Producto/useDetallesProductos';
import { addDetalleProductoOnProducto } from '../../../../http/Producto/producto';
import { IProducto } from '../../../../types/Producto/IProducto';
import { useTalles } from '../../../../hooks/Producto/useTalles';
import Select from 'react-select';
import { ITalles } from '../../../../types/Producto/ITalles';
import { MultiValue, ActionMeta } from 'react-select';

interface ModalDetalleProductoProps {
  productoDetalle: IProducto,
  idProducto: number,
  show: boolean;
  onClose: () => void;
}

const initialStateDetalleProducto: IDetalleProductos = {
    tallesDetalleProductos: [],
    stock: 0,
    color: "",
    estado: true,
    producto: {
        id: 0
    },
    precio: {
        id: 0
    },
    imagenProducto: {
        id: 0
    }
}

const initialStatePrecio: IPrecio = {
    precioCompra: 0,
    precioVenta: 0
}

const initialStateImagenProducto: IImagenProducto = {
    url: "",
    alt: ""
}

type OpcionTalle = { value: number; label?: string };

export const ModalAgregarDetalleProducto: FC<ModalDetalleProductoProps> = ({productoDetalle, idProducto, show, onClose}) => {

    const [formValuesDetalleProducto, setFormValuesDetalleProducto] = useState<IDetalleProductos>(initialStateDetalleProducto)
    const [formValuesPrecio, setFormValuesPrecio] = useState<IPrecio>(initialStatePrecio)
    const [formValuesImagenProducto, setFormValuesImagenProducto] = useState<IImagenProducto>(initialStateImagenProducto)
    const [tallesSeleccionados, setTallesSeleccionados] = useState<{value: number, label?: string}[]>([])

    const {crearPrecioHook} = usePrecios()
    const {crearImagenProductoHook} = useImagenesProductos()
    const {crearDetalleProductoHook, addTalleOnDetalleProductoHook} = useDetallesProductos()
    const {talles, getTallesHook} = useTalles()

    useEffect(() => {
        getTallesHook()
    }, [])

    console.log("Talles: " + talles)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target

        if (name === "stock" || name === "color"){
            setFormValuesDetalleProducto((prev) => ({...prev, [name] : value}))
        }else if(name === "precioCompra" || name === "precioVenta"){
            setFormValuesPrecio((prev) => ({...prev, [name]: value}))
        }else{
            setFormValuesImagenProducto((prev) => ({...prev, [name]: value}))
        }
    }

    const handleChangeTalles = (selected: MultiValue<OpcionTalle>) => {
        setTallesSeleccionados(selected.map(element => element))
    }

    const handleSubmit = async(e: FormEvent) => {
        e.preventDefault()

        const tallesSelect = tallesSeleccionados.map(t => ({
            id: t.value,
            talle: t.label
        }))

        console.log("Talles Detalle: ", formValuesDetalleProducto.tallesDetalleProductos)

        const precioDetalle = await crearPrecioHook(formValuesPrecio)

        console.log("id base de datos: ", precioDetalle?.id)

        const imagenDetalle = await crearImagenProductoHook(formValuesImagenProducto)

        const detalleConIdsActualizados = {
            ...formValuesDetalleProducto,
            producto: {
            ...formValuesDetalleProducto.producto,
            id: idProducto
            },
            precio: {
            ...formValuesDetalleProducto.precio,
            id: precioDetalle!.id
            },
            imagenProducto: {
            ...formValuesDetalleProducto.imagenProducto,
            id: imagenDetalle!.id
        }
    };

        const detalle = await crearDetalleProductoHook(detalleConIdsActualizados)

        for(let i = 0; i < tallesSelect.length; i++){
            await addTalleOnDetalleProductoHook(detalle?.id!, tallesSelect[i])
        }

        await addDetalleProductoOnProducto(detalleConIdsActualizados, idProducto)

        onClose()

    }

    const opcionesTalles: OpcionTalle[] = talles.map(t => ({
        value: t.id,
        label: t.talle
    }))


  return (
    <Modal show={show} onHide={onClose} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Agregar Detalle Producto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="stock">
        <Form.Label>Stock</Form.Label>
        <Form.Control
          type="number"
          name="stock"
          value={formValuesDetalleProducto.stock}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="color">
        <Form.Label>Color</Form.Label>
        <Form.Control
          type="text"
          name="color"
          value={formValuesDetalleProducto.color}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="talles">
        <Form.Label>Talles</Form.Label>
            <Select<OpcionTalle, true>
                options={opcionesTalles}
                isMulti
                value={tallesSeleccionados}
                onChange={handleChangeTalles}
                className="basic-multi-select"
                classNamePrefix="select"
             />
        </Form.Group>

      <Form.Group className="mb-3" controlId="precioCompra">
        <Form.Label>Precio Compra</Form.Label>
        <Form.Control
          type="number"
          name="precioCompra"
          value={formValuesPrecio.precioCompra}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="precioVenta">
        <Form.Label>Precio Venta</Form.Label>
        <Form.Control
          type="number"
          name="precioVenta"
          value={formValuesPrecio.precioVenta}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="url">
        <Form.Label>URL imagen</Form.Label>
        <Form.Control
          type="text"
          name="url"
          value={formValuesImagenProducto.url}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="alt">
        <Form.Label>Descripcion de la imagen</Form.Label>
        <Form.Control
          type="text"
          name="alt"
          value={formValuesImagenProducto.alt}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Agregar Detalle
      </Button>
    </Form>

      </Modal.Body>
    </Modal>
  )
}
