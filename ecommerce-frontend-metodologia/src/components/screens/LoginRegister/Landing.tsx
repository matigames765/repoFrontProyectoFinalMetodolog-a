import { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import Login from './Login/Login';
import Register from './Register/Register';
import { tokenStore } from './Token/tokenStore';
import { getDetallesController } from './Token/getToken';

const Landing = () => {

    const token = tokenStore((state) => state.token)
    const detalles = tokenStore((state) => state.detalleProductos)
    const setDetalles = tokenStore((state) => state.setDetalles)

    const setToken = tokenStore((state) => state.setToken)

    const [buttonRegister, setButtonRegister] = useState<boolean>(false);
    const [buttonLogin, setButtonLogin] = useState<boolean>(false);
    const [buttonDetalles, setButtonDetalles] = useState<boolean>(false);

    const handleButtonRegister = () => {
        setButtonRegister(!buttonRegister);;
    }

    const handleButtonLogin = () => {
        setButtonLogin(!buttonLogin);
    }

    const handleClickDetalles = async () => {
        if (buttonDetalles) {
            setDetalles([])
            setButtonDetalles(false)
        } else {
            const data = await getDetallesController(token!);
            if (data) setDetalles(data)
            setButtonDetalles(true)
        }
    }

    useEffect(() => {
        if (token) console.log("token: ", token)
    }, [token])

    useEffect(() => {
        if (detalles) {
            console.log(detalles)
        } else {
            console.log("No hay detalles")
        }
    }, [detalles])

    return (
        <>
            <div style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1vh' }}>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <Button onClick={handleButtonLogin} variant='dark'>Iniciar Seccion</Button>
                    <Button onClick={handleButtonRegister} variant='info'>Registrarse</Button>
                    <Button onClick={() => setToken(null)} variant='danger'>Reset token</Button>
                </div>

                {
                    token ? (
                        <p>token: {token.token}</p>
                    ) : (
                        <p>No hay token</p>
                    )
                }
                <Button onClick={handleClickDetalles} variant='info'>mostrar detalles</Button>
                <div style={{ width: "80%", display:'flex' }}>
                    {
                        (detalles.length > 0) && (token) ? (
                            detalles.map((detalle) =>
                                <Card key={detalle.id} style={{ width: '18rem' }}>
                                    <img src={detalle.imagenProducto?.url ?? 'nomrre'} />
                                    <Card.Body>
                                        <Card.Title>{detalle.producto?.nombre}</Card.Title>
                                        <Card.Text>{detalle.estado ? "TRUE" : "FALSE"}</Card.Text>
                                        <Card.Text>{detalle.precio?.precioCompra}</Card.Text>
                                        <Card.Text>{detalle.precio?.precioVenta}</Card.Text>
                                        <Card.Text>{detalle.stock}</Card.Text>
                                        <Button onClick={() => console.log(detalle.producto)} variant="primary">botton</Button>
                                    </Card.Body>
                                </Card>
                            )
                        ) : (
                            <p>No hay detalles</p>
                        )
                    }
                </div>
            </div>

            <Login show={buttonLogin} handleClose={handleButtonLogin} />

            <Register show={buttonRegister} handleClose={handleButtonRegister} />
        </>
    )
}

export default Landing



