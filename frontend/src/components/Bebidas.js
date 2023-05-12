import React, { useEffect, useState } from 'react';
import './styles.css'
import {useStore}  from './store.js';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';


function Bebida({bebida}){
   const {selectBebida,selectedBebida,unselectedBebida} = useStore();
  
    
   const handleClick = ()=>{
      selectBebida(bebida);
   }

return(    
  
     <div onClick={handleClick}>
      <Card sx={{ maxWidth: 200, backgroundImage: 'linear-gradient(180deg, #ff6ccd 0, #f163d2 12.5%, #df5bd7 25%, #ca54dc 37.5%, #b14ee0 50%, #934ae4 62.5%, #6d49e8 75%, #3049ec 87.5%, #004bf0 100%)',
     }} >
      <CardActionArea>
      <img
         className="pagar_img" 
         src="https://m.media-amazon.com/images/I/61p27ip0nLL._AC_SX342_.jpg"
         alt=""
       />
        <CardContent>
          <Typography gutterBottom color="#fff" variant="h5" component="div">
           <h3>{bebida.nombre}</h3>
          </Typography>
          <Typography variant="body2" color="text.#fff">
          Descripción: {bebida.descripcion}
          </Typography>
          <Typography variant="body2" color="text.#fff">
           Precio: {bebida.precio}
          </Typography>
          <Typography variant="body2" color="text.#fff">
    Id de producto: {bebida._id}

          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
     </div>
  );
}

export default Bebida;