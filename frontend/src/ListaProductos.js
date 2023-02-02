import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Producto from './components/Producto';
import './App.css'

function ListaProductos(){

    const[dataProducto,setDataproducto] = useState([]);

    useEffect(()=>{
        axios.get('http://127.0.0.1:5000/productos').then(res =>{
            console.log(res.data);
            
       
           setDataproducto(res.data);
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
}
    )

return(
       
        <div className="lista_productos">
        	<h2>Lista de Productos</h2>
            {listaProductos}
            <a href="" >Pagar</a>
        </div>
    );
}

export default ListaProductos;



