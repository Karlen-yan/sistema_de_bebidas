import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Producto from './components/Producto';
import { Formik, Form, Field } from 'formik';
import './App.css'

function ListaProductos(){
    // new 
    const variableInicial = {
        bebida: '',
        mezcla: ''
      };

    const validate = values => {
        const errors = {};
        if (!values.bebida) {
          errors.bebida = 'Selecciona una bebida';
        }
        if (!values.mezcla) {
          errors.mezcla = 'Selecciona una mezcla';
        }
        return errors;
      };
<Formik 
  initialValues={variableInicial} 
  validate={validate} 
  onSubmit={(values, { setSubmitting }) => {
    // Lógica de envío de formulario aquí
  }}
>
  {({ isSubmitting, errors, touched }) => (
    <Form>
      <Field type="text" name="bebida" />
      {errors.bebida && touched.bebida ? <div>{errors.bebida}</div> : null}
      <Field type="text" name="mezcla" />
      {errors.mezcla && touched.mezcla ? <div>{errors.mezcla}</div> : null}
      <button type="submit" disabled={isSubmitting}>
        Enviar
      </button>
    </Form>
  )}
</Formik>


    //   old 
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
       <>
       <div className='lista_productos'>
        	<h2>Lista de Productos</h2>

       </div>
        <div className='product_contenedor'>
            {listaProductos}
        </div>
            <a href="" >Pagar</a>
       </>
    );
}

export default ListaProductos;



