import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Bebida from './components/Bebidas';
import Mezclas from './components/Mezclas';
import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import NavBar from './components/NavBar';
import Button from '@mui/material/Button';


function ListaProductos() {
    //   old 
    const [databebida, setDatabebida] = useState([]);
    const [dataProductoMezcla, setdataProductoMezcla] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:5000/bebidas').then(res => {

            console.log(res.data);
            setDatabebida(res.data);
        }).catch(err => {
            console.log(err)
        });
        axios.get('http://127.0.0.1:5000/mezclas').then(res => {

            console.log(res.data);
            setdataProductoMezcla(res.data);
        }).catch(err => {
            console.log(err)
        })
    }, [])

    const listaBebidas = databebida.map(bebida => {
        return (
            <div key={bebida._id}>
                <Bebida bebida={bebida} />
            </div>
        )
    })
    const listaProductosMezclas = dataProductoMezcla.map(mezcla => {
        return (
            <div key={mezcla._id}>
                <Mezclas mezcla={mezcla} />
            </div>
        )
    })

    const navigate = useNavigate();

    function handleBuyClick() {
        navigate("/pagar");
    }

    const ProductGrid = styled(Grid)({
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        backgroundColor: 'rgb(28, 17, 82)',
        padding: '15px',
        margin: '15px'
    });

    return (

        <>
            <Container maxWidth="xl">
                <NavBar />
                <div style={{ backgroundColor: 'rgb(28, 17, 82)', textAlign: "center", color: "white", textShadow: "0.50px 0.50px 0 #ff6ccd, 1px 1px 0 #f163d2, 2px 2px 0 #df5bd7, 3px 3px 0 #ca54dc, 4px 4px 0 #b14ee0, 5.5px 5.5px 0 #934ae4, 6px 6px 0 #6d49e8, 7px 7px 0 #3049ec, 8px 8px 0 #004bf0", padding: 15 }} >
                    <h2>Lista de Productos</h2>
                </div>
                <ProductGrid>
                    {listaBebidas}
                </ProductGrid>
                <div style={{ backgroundColor: 'rgb(28, 17, 82)', textAlign: "center", color: "white", textShadow: "0.50px 0.50px 0 #ff6ccd, 1px 1px 0 #f163d2, 2px 2px 0 #df5bd7, 3px 3px 0 #ca54dc, 4px 4px 0 #b14ee0, 5.5px 5.5px 0 #934ae4, 6px 6px 0 #6d49e8, 7px 7px 0 #3049ec, 8px 8px 0 #004bf0", padding: 15 }}>
                    <h2>Lista de Mezclas</h2>
                </div>
                <ProductGrid>
                    {listaProductosMezclas}
                </ProductGrid>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button s variant="contained" onClick={handleBuyClick}>Pagar</Button>
                </div>
            </Container>
        </>
    );
}

export default ListaProductos;



