import React , {useEffect, useState}from 'react';
import './styles.css'
import {useStore} from './store';

import {Formik, Form, Field , ErrorMessage } from 'formik';


function Pagar(){
    const {
            selectedBebida,
            selectedMezcla
        } = useStore()
    
useEffect(() => {
  
console.log(selectedBebida);
console.log(selectedMezcla);

}, [])

const [formularioEnviado, cambiarFormularioEnviado] = useState(false);

return(
        <div className="pagar_raiz">
           <div className='pagar_contenedor'>
             <div className="paar_items">
        	   <h2 style={{color:"white"}}>Agregar nuevo  Productos</h2>
            
               {selectedBebida != null ?
                <div>
                    <h3>Bebida seleccionada:</h3>
                    {/* <p>img : {selectedBebida.nombre}</p> */}
                    
                <p>Descripción{selectedBebida.descripcion}</p>
                <p>Precio: {selectedBebida.precio}</p>
                <p>Id de producto: {selectedBebida._id}</p>
                </div>: null
            }
            {selectedMezcla != null ?
                <div>
                    <h3>Mezcla seleccionada:</h3>
                    <p>Nombre : {selectedMezcla.name}</p>
                    <p>Descripción : {selectedMezcla.descripcion}</p>
                    <p>price : {selectedMezcla.price}</p>
                    <p>Id : {selectedMezcla._id}</p>

                </div>
            : null
            }

         
                {/* <h3>Encabezado: </h3> */}
                {/* <img className="paar_img" src="https://www.bodeboca.com/sites/default/files/styles/mainbottle_normal/public/externals/3e1d4afc7b1b92c7c6b9b22ac711cd57.jpg?itok=WSPn4M8e" alt="" /> */}
                 {/* <p>descripcion</p>
                <p>Precio</p> */}
                
            <Formik
              initialValues={{
                datosCuenta:'',
                data:'',
                cv: ''
            }}
              validate={(valores)=>{
                let errors ={};

                // validacion datos de la cuenta 
                if(!valores.datosCuenta){
                    errors.datosCuenta = "Por favor ingrese sus datos de la cuenta."
                }else if (!/^[A-Z]{2}\d{2}[ ]?\d{4}[ ]?\d{4}[ ]?\d{4}[ ]?\d{4}[ ]?\d{0,2}$/.test(valores.datosCuenta)){
                    errors.datosCuenta = "Iban no valido."
                }
                return errors;

              }}
              onSubmit={(valores,{resetForm})=>{
                resetForm();
                console.log("Formulario enviado")
                cambiarFormularioEnviado(true);
                setTimeout(()=>cambiarFormularioEnviado(false),5000)
              }}
            >
               {({errors})=>{

                <Form>
                     <label >Datos de la cuenta</label>
                <Field 
                   type="text" 
                   id='datosCuenta' 
                   name="datosCuenta"
                   />

                   <ErrorMessage name="datosCuenta" component={()=>(
                    <div className='error' >{errors.datosCuenta}</div>
                   )}/>

                <label >Data</label>
                <Field 
                   type="text" 
                   id='data' 
                   name="data" 
                   />
                <ErrorMessage name="data" component={()=>( <div className='error' >{errors.data}</div> )}/>
                <label >CV</label>
                <Field 
                   type="text" 
                   id='cv' 
                   name="cv" 
                   />
                <ErrorMessage name="cv" component={()=>( <div className='error' >{errors.cv}</div>)}/>
                <button type="submit" name="submit">Submit</button>
                {formularioEnviado && <p className='exito'>Formulario enviado con exito</p>}
                </Form>
               }} 
               
            </Formik>
                
             </div>

            </div>

            <div style={{width:300, height:'100%'}}>

            </div>

        </div>
    );
       
}

export default Pagar;