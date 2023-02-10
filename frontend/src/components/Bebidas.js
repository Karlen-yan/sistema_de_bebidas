import React, { useState } from 'react';
import './styles.css'


function bebidas({bebida}){

return(  
             <div className="product_items">
                
                <h3>{bebida.nombre}</h3>
                <img className="pagar_img" src="https://www.bodeboca.com/sites/default/files/styles/mainbottle_normal/public/externals/3e1d4afc7b1b92c7c6b9b22ac711cd57.jpg?itok=WSPn4M8e" alt="" />
                 <p>Descripción{bebida.descripcion}</p>
                <p>Precio: {bebida.precio}</p>
                <p>Id de producto: {bebida._id}</p>
             </div>

    );
}
export default bebidas ;