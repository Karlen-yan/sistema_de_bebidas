import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Producto from './components/Bebidas';
import { Formik, Form, Field } from 'formik';
// import './App.css'

function ListaMezcla(){
    //   old 
    const[dataMezcla,setMezcla] = useState([]);

    useEffect(()=>{
        axios.get('http://127.0.0.1:5000/mezcla').then(res =>{
            
           console.log(res.data);
           setMezcla(res.data);
        }).catch(err =>{
            console.log(err)
        })
    },[])

const listaMezcla = dataMezcla.map(mezcla => {
    return(
        <div>
            <Producto mezcla={mezcla}/>
        </div>
    )
}
    )

return(
       <>
       <div className='lista_productos'>
        	<h2>Lista de Productos</h2>

       </div>
        <div className='product_contenedor'>
            {listaMezcla}
        </div>
            <a href="" >Pagar</a>
       </>
    );
}

export default ListaMezcla;



