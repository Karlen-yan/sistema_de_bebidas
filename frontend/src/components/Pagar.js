import React from 'react';
import './styles.css'

function Pagar(){
// HOOKS
return(
        <div className="pagar_raiz">
        	<h2>Agregar nuevo  Productos</h2>
            <div className='pagar_contenedor'>
            <div className="paar_items">
                <h3>Encabezado </h3>
                <img class="paar_img" src="https://www.bodeboca.com/sites/default/files/styles/mainbottle_normal/public/externals/3e1d4afc7b1b92c7c6b9b22ac711cd57.jpg?itok=WSPn4M8e" alt="" />
                 <p>descripcion</p>
                <p>Precio</p>
             </div>
            </div>
            <div>
            <form action='' method='post'>
                <label for="datosCuenta">Datos de la cuenta</label>
                <input type="text" id='datosCuenta' name="Datos de la cuenta" value="" />
                <label for="data">Data</label>
                <input type="text" id='data' name="data" value="" />
                <label for="cv">CV</label>
                <input type="text" id='cv' name="cv" value="" />

                <input type="submit" name="" value="Comprar" />
            </form>
                
            </div>

        </div>
    );
       
}

export default Pagar;