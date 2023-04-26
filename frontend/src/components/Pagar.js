import React, { useEffect, useState } from "react";
import "./styles.css";
import { useStore } from "./store";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";

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
  return (
    <div className="pagar_raiz">
      <div className="pagar_contenedor">
        <div className="paar_items">
          <h2
            style={{
              color: "white"
            }}
          >
            Agregar nuevo Productos
          </h2>
          <div className="seleccionada__contenido">

           {/* Select bebida  */}
            <div className="seleccionada__caja-bebida">
              {selectedBebida != null
                ? <div>
                    <h3> Bebida seleccionada : </h3>
                    <p>Nombre: { selectedBebida.nombre}</p>
                    <p> Descripción: {selectedBebida.descripcion} </p>
                    <p> Precio: {selectedBebida.precio} </p>
                    <p> Id: {selectedBebida._id} </p>
                  </div>
                : null} 
             </div>
             
             {/* SelectMezcla */}
            <div className="seleccionada__caja-mezcla">
             {selectedMezcla != null
                ? <div>
                    <h3> Mezcla seleccionada : </h3>
                    <p> Nombre: {selectedMezcla.name} </p>
                    <p> Descripción: {selectedMezcla.descripcion} </p>
                    <p> Precio: {selectedMezcla.price} </p>
                    <p> Id: {selectedMezcla._id} </p>
                  </div>
                : null}
            </div>

          </div>
        </div>
      </div>

      <div
        style={{
          width: "80%",
          height: "100%",
          backgroundColor: "rgba(37, 61, 85, 0.93)",
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
                <button type="submit" name="submit">
                  Submit
                </button>
                {formularioEnviado &&
                  <p className="exito"> Formulario enviado con exito </p>}
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}
export default Pagar;
