import React, { useState, useEffect } from "react";
import "./styles.css";
import { useStore } from "./store.js";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
function Mezclas({ mezcla }) {
  const { selectMezcla, selectedMezcla, unselectedMezcla } = useStore();

  // const selectMezcla = useStore((state)=> state.selectMezcla);
  // const unselectMezcla = useStore((state)=> state.unselectMezcla);

  // const selectedMezcla = useStore((state)=> state.selectedMezcla);

  const handleClick = () => {
      selectMezcla(mezcla);
   console.log(selectedMezcla);
  };



  return (
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
         <h3>{mezcla.name}</h3>
          </Typography>
          <Typography variant="body2" color="text.#fff">
          Descripción: {mezcla.descripcion}
          </Typography>
          <Typography variant="body2" color="text.#fff">
          Precio: {mezcla.price}
          </Typography>
          <Typography variant="body2" color="text.#fff">
          Id de producto: {mezcla._id}

          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

</div>
  );
}
export default Mezclas;
