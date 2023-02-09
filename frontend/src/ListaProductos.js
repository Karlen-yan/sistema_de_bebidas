import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Producto from './components/Bebidas';
import Mezclas from './components/Mezclas';
// import { Formik, Form, Field } from 'formik';
import './App.css';

function ListaProductos(){
    //   old 
    const[dataProducto,setDataproducto] = useState([]);
    const[dataProductoMezcla,setdataProductoMezcla] = useState([]);

    useEffect(()=>{
        axios.get('http://127.0.0.1:5000/productos').then(res =>{
            
           console.log(res.data);
           setDataproducto(res.data);
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

const listaProductos = dataProducto.map(producto => {
    return(
        <div>
            <Producto producto={producto}/>
        </div>
    )
})
const listaProductosMezclas = dataProductoMezcla.map(mezcla => {
    return(
        <div>
            <Mezclas mezcla={mezcla}/>
        </div>
    )
})

return(
       <>
       <div className='lista_productos'>
        	<h2>Lista de Productos</h2>

       </div>
        <div className='product_contenedor'>
            {listaProductos}
        </div>
        <div className='product_contenedor'>
            {listaProductosMezclas}
        </div>
            <a >Pagar</a>
       </>
    );
}

export default ListaProductos;



