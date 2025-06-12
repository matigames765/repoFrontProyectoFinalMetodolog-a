import { TipoProducto } from "../../../../types/Producto/TipoProducto";

import { IProducto } from "../../../../types/Producto/IProducto";
import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useCategorias } from "../../../../hooks/Producto/useCategorias";
import { ICategoria } from "../../../../types/Producto/ICategoria";



const seccion = ["DESTACADOS", "MASCULINO", "FEMENINO", "NIÑOS", "ACCESORIOS"];



interface IFormAgregarProductoProps {
  initialStateProducto: IProducto;
  initialStateCategoria: ICategoria;
  onSubmit: (product: IProducto) => void;
}

export const FormAgregarProducto: FC<IFormAgregarProductoProps> = ({
  initialStateProducto,
  onSubmit
}) => {


  const [formValuesProducto, setFormValuesProducto] = useState(initialStateProducto)


  const {categorias, getCategoriasHook} = useCategorias()

  useEffect(() => {
    getCategoriasHook()
  }, [])


  const handleChangeProducto = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
  const { name, value } = e.target;

  if (name === "categoria") {
    const categoriaSeleccionada = categorias.find(cat => cat.id === Number(value));
    
    setFormValuesProducto((prev) => ({
      ...prev,
      categoria: { 
        id: Number(value),
        nombre: categoriaSeleccionada?.nombre }, 
    }));
  } else {
    setFormValuesProducto((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
};


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    formValuesProducto.estado === true
    console.log(formValuesProducto)
    onSubmit(formValuesProducto);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="nombre">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          name="nombre"
          value={formValuesProducto.nombre}
          onChange={handleChangeProducto}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="categoria">
        <Form.Label>Categoria</Form.Label>
      <Form.Select
        name="categoria"
        value={formValuesProducto.categoria?.id ? String(formValuesProducto.categoria.id) : ""}
        onChange={handleChangeProducto}
        required
      >
        <option value="" disabled>-- Categoria --</option>
        {categorias.map((cat) => (
          <option key={cat.id} value={String(cat.id)}>{cat.nombre}</option>
        ))}
      </Form.Select>
        </Form.Group>

      <Form.Group className="mb-3" controlId="tipoProducto">
        <Form.Label>Tipo Producto</Form.Label>
        <Form.Select
          name="tipoProducto"
          value={formValuesProducto.tipoProducto}
          onChange={handleChangeProducto}
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

      <Form.Group className="mb-3" controlId="seccion">
        <Form.Label>Seccion</Form.Label>
        <Form.Select
          name="seccion"
          value={formValuesProducto.seccion}
          onChange={handleChangeProducto}
          required
        >
          <option value="" disabled>-- Seccion --</option>
          {seccion.map((seccionPart) => (
            <option key={seccionPart} value={seccionPart}>
              {seccionPart}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      <Button variant="primary" type="submit">
        Guardar Producto
      </Button>
    </Form>
  );
};
