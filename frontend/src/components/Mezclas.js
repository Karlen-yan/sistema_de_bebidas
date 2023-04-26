import React, { useState, useEffect } from "react";
import "./styles.css";
import { useStore } from "./store.js";

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
    <div className="product_items" onClick={handleClick}>
      <h3>{mezcla.name}</h3>

      <img
        className="pagar_img"
        src="https://www.bodeboca.com/sites/default/files/styles/mainbottle_normal/public/externals/3e1d4afc7b1b92c7c6b9b22ac711cd57.jpg?itok=WSPn4M8e"
        alt=""
      />

      <p>
        Descripción: {mezcla.descripcion}
      </p>
      <p>
        Precio: {mezcla.price}
      </p>
      <p>
        Id de producto: {mezcla._id}
      </p>
    </div>
  );
}
export default Mezclas;
