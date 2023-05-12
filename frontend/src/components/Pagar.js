import React, { useEffect, useState } from "react";
import "./styles.css";
import { useStore } from "./store";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import NavBar from './NavBar';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


function Pagar() {
  const { selectedBebida, selectedMezcla, unselectedBebida ,unselectedMezcla } = useStore();

  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);

  const handleDelete = () => {
    // SELECT BEBIDA 
    if (selectedBebida != null || undefined || "") {
      console.log({
        selectedBebida: selectedBebida._id
      });
      axios
        .delete(`http://127.0.0.1:5000/bebidas/${selectedBebida._id}`)
        .then(() => {
          unselectedBebida();
        })
        .catch(err => {
          console.error(err);
        });
    }
    // SELECTMEZCLA
    if (selectedMezcla != null || undefined || "") {
      console.log({
        selectedMezcla: selectedMezcla._id
      });
      axios
        .delete(`http://127.0.0.1:5000/mezclas/${selectedMezcla._id}`)
        .then(() => {
          unselectedMezcla();
        })
        .catch(err => {
          console.error(err);
        });
    }
  
  };

  const ProductGrid = styled(Grid)({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    backgroundColor: 'rgb(28, 17, 82)',
    padding: '15px',
    margin:'15px',    
});

  return (
    <>
    <Container maxWidth="xl">
     <NavBar />
     <div style={{ backgroundColor: 'rgb(28, 17, 82)', textAlign: "center", color: "white", textShadow: "0.50px 0.50px 15px white", padding: 15 }} >
          <h2>
            Agregar nuevo Productos
          </h2>
          </div>
          <ProductGrid>
            <Card sx={{ maxWidth: 600,boxShadow:'1px 3px 20px silver', backgroundImage: 'linear-gradient(180deg, #ff6ccd 0, #f163d2 12.5%, #df5bd7 25%, #ca54dc 37.5%, #b14ee0 50%, #934ae4 62.5%, #6d49e8 75%, #3049ec 87.5%, #004bf0 100%)',
     }} >
       <CardActionArea>
        
              {selectedBebida != null
                ? <CardContent>
                <Typography gutterBottom color="#fff" variant="h5" component="div">
                    <h3> Bebida seleccionada : </h3>
                    </Typography>
                    <Typography gutterBottom color="#fff" variant="h4" component="div">
                    <p>Nombre: { selectedBebida.nombre}</p>
                    </Typography>
                    <Typography variant="body2" color="text.#fff">
                    <p> Descripción: {selectedBebida.descripcion} </p>
                    </Typography>
                    <Typography variant="body2" color="text.#fff">
                    <p> Precio: {selectedBebida.precio} </p>
                    </Typography>
                    <Typography variant="body2" color="text.#fff">
                    <p> Id: {selectedBebida._id} </p>
                    </Typography>
                  </CardContent>
                : null} 

        </CardActionArea>     
  </Card>        
             {/* SelectMezcla */}
             <Card sx={{ maxWidth: 600,boxShadow:'1px 3px 20px silver', backgroundImage: 'linear-gradient(180deg, #ff6ccd 0, #f163d2 12.5%, #df5bd7 25%, #ca54dc 37.5%, #b14ee0 50%, #934ae4 62.5%, #6d49e8 75%, #3049ec 87.5%, #004bf0 100%)',
     }} >
       <CardActionArea>
             {selectedMezcla != null
                ? <CardContent>
                <Typography gutterBottom color="#fff" variant="h5" component="div">
                    <h3> Mezcla seleccionada : </h3>
                    </Typography>
                    <Typography gutterBottom color="#fff" variant="h4" component="div">
                    <p> Nombre: {selectedMezcla.name} </p>
                    </Typography>
                    <Typography variant="body2" color="text.#fff">
                    <p> Descripción: {selectedMezcla.descripcion} </p> </Typography>
                    <Typography variant="body2" color="text.#fff">
                    <p> Precio: {selectedMezcla.price} </p>
                    </Typography>
                    <Typography variant="body2" color="text.#fff">
                    <p> Id: {selectedMezcla._id} </p>
                    </Typography>
                  </CardContent>
                : null}
                    </CardActionArea>     
                  </Card>    
            </ProductGrid>
      <div
        style={{
          width: "80%",
          height: "100%",
          backgroundColor: 'rgb(28, 17, 82)',
          margin: "0 auto",
          color: "white",
          boxShadow: "2px 2px 2px black",
          borderRadius: "2px"
        }}
      >
        <Formik
          initialValues={{
            datosCuenta: "",
            data: "",
            cvc: ""
          }}
          validate={valores => {
            let errors = {};

            // validacion datos de la cuenta

            if (!valores.datosCuenta) {
              errors.datosCuenta = "Por favor ingrese sus datos de la cuenta.";
            } else if (
              /^[A-Z]{2}\d{2}\s?\d{4}\s?\d{4}\s?\d{4}\s?\d{4}\s?$/.test(
                valores.datosCuenta
              )
            ) {
              // ES79 0081 0657 1100 0122 1312 Ejemplo para probar en web
              errors.datosCuenta = "Iban no valido.";
            }
            // Validación de la data de la tarjeta
            if (!valores.data) {
              errors.data =
                "Por favor ingrese la fecha de expiración de la tarjeta.";
            } else if (!/^(0[1-9]|1[0-2])\/([2-9][0-9])$/.test(valores.data)) {
              errors.data = "Fecha de expiración de tarjeta inválida.";
            }
            // validacion de codigo cvc
            if (!valores.cvc) {
              errors.cvc = "El código de verificación es requerido";
            } else if (
              valores.cvc.length !== 3 ||
              !/^[0-9]+$/.test(valores.cvc)
            ) {
              errors.cvc = "El código de verificación no es válido";
            }

            return errors;
          }}
          onSubmit={(valores, { resetForm }) => {
            // enviarDatos(valores);
            handleDelete();

            resetForm();
            console.log("Formulario enviado");
            // cambiarFormularioEnviado(true);
            // setTimeout(()=>cambiarFormularioEnviado(false),5000)
          }}
        >
          {({ errors }) => {
            return (
              <Form>
                <label> Datos de la cuenta </label>
                <Field type="text" id="datosCuenta" name="datosCuenta" />
                <ErrorMessage
                  name="datosCuenta"
                  component={() =>
                    <div className="error">
                     {errors.datosCuenta}
                    </div>}
                />
                <label> Data </label>
                <Field type="text" id="data" name="data" />
                <ErrorMessage
                  name="data"
                  component={() =>
                    <div className="error">
                      {errors.data}
                    </div>}
                />
                <label> CVC </label>
                <Field name="cvc" placeholder="Código de verificación" />
                <ErrorMessage
                  name="cvc"
                  component={() =>
                    <div className="error">
                      {errors.cvc}
                    </div>}
                />
                <Button style={{margin:5, backgroundColor:'white'}} type="submit" name="submit">
                  Comprar
                </Button>
                {formularioEnviado &&
                <p className="exito"> Formulario enviado con exito </p>}
              </Form>
            );
          }}

        </Formik>
      </div>
</Container>
    </>
  );
}
export default Pagar;
