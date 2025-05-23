import { TipoProducto } from "../../../../types/Producto/TipoProducto";

import { IProducto } from "../../../../types/Producto/IProducto";
import React, { FC, useState } from "react";
import { Button, Form } from "react-bootstrap";

const categoriasEjemplo = [
  { id: 1, nombre: "Training", categoriaPadre: null },
  { id: 2, nombre: "Urbano", categoriaPadre: null },
  { id: 3, nombre: "Niños", categoriaPadre: null },
];

const sexos = ["Hombre", "Mujer", "Unisex"];

interface IFormAgregarProductoProps {
  initialState: IProducto;
  onSubmit: (product: IProducto) => void;
}

export const FormAgregarProducto: FC<IFormAgregarProductoProps> = ({
  initialState,
  onSubmit,
}) => {
  const [producto, setProducto] = useState<IProducto>(initialState);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    switch (name) {
      case "nombre":
        setProducto({ ...producto, nombre: value });
        break;

      case "categoria": {
        const categoriaSeleccionada = categoriasEjemplo.find(
          (cat) => cat.id === Number(value)
        );
        if (categoriaSeleccionada) {
          setProducto({ ...producto, categoria: categoriaSeleccionada });
        }
        break;
      }

      case "tipoProducto":
        setProducto({ ...producto, tipoProducto: value as TipoProducto });
        break;

      case "sexo":
        setProducto({ ...producto, sexo: value });
        break;

      case "color":
        setProducto({
          ...producto,
          detallesProductos: {
            ...producto.detallesProductos,
            color: value,
          },
        });
        break;

      case "stock":
        setProducto({
          ...producto,
          detallesProductos: {
            ...producto.detallesProductos,
            stock: Number(value),
          },
        });
        break;

      case "precioVenta":
        setProducto({
          ...producto,
          detallesProductos: {
            ...producto.detallesProductos,
            precio: {
              ...producto.detallesProductos.precio,
              precioVenta: Number(value),
            },
          },
        });
        break;

      case "imagenUrl":
        setProducto({
          ...producto,
          detallesProductos: {
            ...producto.detallesProductos,
            imagenProducto: {
              ...producto.detallesProductos.imagenProducto,
              url: value,
            },
          },
        });
        break;

      case "imagenAlt":
        setProducto({
          ...producto,
          detallesProductos: {
            ...producto.detallesProductos,
            imagenProducto: {
              ...producto.detallesProductos.imagenProducto,
              alt: value,
            },
          },
        });
        break;

      default:
        break;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(producto);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="nombre">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          name="nombre"
          value={producto.nombre}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="categoria">
        <Form.Label>Categoría</Form.Label>
        <Form.Select
          name="categoria"
          value={producto.categoria.id}
          onChange={handleChange}
          required
        >
          <option value="0" disabled>
            -- Categoria --
          </option>
          {categoriasEjemplo.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.nombre}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="tipoProducto">
        <Form.Label>Tipo Producto</Form.Label>
        <Form.Select
          name="tipoProducto"
          value={producto.tipoProducto}
          onChange={handleChange}
          required
        >
          <option value="" disabled>-- Tipo de Producto --</option>
          {Object.values(TipoProducto).map((tipo) => (
            <option key={tipo} value={tipo}>
              {tipo}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="sexo">
        <Form.Label>Sexo</Form.Label>
        <Form.Select
          name="sexo"
          value={producto.sexo}
          onChange={handleChange}
          required
        >
          <option value="" disabled>-- Sexo --</option>
          {sexos.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      <fieldset>
        <legend>Detalles del Producto</legend>

        <Form.Group className="mb-3" controlId="color">
          <Form.Label>Color</Form.Label>
          <Form.Control
            type="text"
            name="color"
            value={producto.detallesProductos.color}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="stock">
          <Form.Label>Stock</Form.Label>
          <Form.Control
            type="number"
            name="stock"
            value={producto.detallesProductos.stock}
            onChange={handleChange}
            required
            min={0}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="precioVenta">
          <Form.Label>Precio de Venta</Form.Label>
          <Form.Control
            type="number"
            name="precioVenta"
            value={producto.detallesProductos.precio.precioVenta}
            onChange={handleChange}
            required
            min={0}
            step="0.01"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="imagenUrl">
          <Form.Label>URL Imagen</Form.Label>
          <Form.Control
            type="text"
            name="imagenUrl"
            value={producto.detallesProductos.imagenProducto.url}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="imagenAlt">
          <Form.Label>Alt Texto Imagen</Form.Label>
          <Form.Control
            type="text"
            name="imagenAlt"
            value={producto.detallesProductos.imagenProducto.alt}
            onChange={handleChange}
          />
        </Form.Group>
      </fieldset>

      <Button variant="primary" type="submit">
        Guardar Producto
      </Button>
    </Form>
  );
};
