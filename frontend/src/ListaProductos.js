import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {useNavigate} from "react-router-dom";
import Bebida from './components/Bebidas';
import Mezclas from './components/Mezclas';

import './App.css';

function ListaProductos(){
    //   old 
    const[databebida,setDatabebida] = useState([]);
    const[dataProductoMezcla,setdataProductoMezcla] = useState([]);

    useEffect(()=>{
        axios.get('http://127.0.0.1:5000/productos').then(res =>{
            
           console.log(res.data);
           setDatabebida(res.data);
        }).catch(err =>{
            console.log(err)
        });
        axios.get('http://127.0.0.1:5000/mezclas').then(res =>{
            
           console.log(res.data);
           setdataProductoMezcla(res.data);
        }).catch(err =>{
            console.log(err)
        })
    },[])

const listaBebidas = databebida.map(bebida => {
    return(
        <div key={bebida._id}>
            <Bebida bebida={bebida}/>
        </div>
    )
})
const listaProductosMezclas = dataProductoMezcla.map(mezcla => {
    return(
        <div key={mezcla._id}>
            <Mezclas mezcla={mezcla}/>
        </div>
    )
})
const navigate = useNavigate();


function handleBuyClick() {
        navigate("/pagar");
      }

return(
 
       <>
       <div className='lista_productos'>
        	<h2>Lista de Productos</h2>
       </div>
        <div className='product_contenedor'>
            {listaBebidas}
        </div>
        <div className='lista_productos'>
        	<h2>Lista de Mezclas</h2>

       </div>
        <div className='product_contenedor'>
            {listaProductosMezclas}
        </div>
    <button onClick={handleBuyClick}>Pagar</button>
    </>
    );
}

export default ListaProductos;



