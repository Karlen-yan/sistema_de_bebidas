import React from 'react';
import './styles.css'

function Pagar(){
// HOOKS
return(
        <div>
        	<h2>Agregar nuevo  Productos</h2>
            <div className='pagar_contenedor'>
            <div className="paar_items">
                <h3>Encabezado </h3>
                <img class="paar_img" src="https://www.bodeboca.com/sites/default/files/styles/mainbottle_normal/public/externals/3e1d4afc7b1b92c7c6b9b22ac711cd57.jpg?itok=WSPn4M8e" alt="" />
                 <p>descripcion</p>
                <p>Precio</p>
             </div>
            </div>

            <form action='' method='post'>
                <input type="text" name="Datos de la cuenta" value="" />
                <input type="text" name="data" value="" />
                <input type="text" name="cv" value="" />
                <input type="submit" name="" value="Comprar" />
            </form>
        </div>
    );
       
}

export default Pagar;