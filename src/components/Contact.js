import React, { useState } from "react";
import emailjs, { send } from "emailjs-com";
import swal from "sweetalert";
import "../css/contact.css";
import Footer from "../components/globals/Footer";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { border } from "@mui/system";

const Contact = () => {
  const alerta = () => {
    swal("BEDU Music recibió el correo");
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2gijg6k",
        "template_goi0x98",
        e.target,
        "user_6GRBTfDxKO2nMsvjxZ9aW"
      )
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  };

  return (
    <body className="container-c">
      <article className=" text-center article-container ">
        <header>
          <h1>
            <em>
              <strong style={{ fontSize: "70px" }}>BEDU Music </strong>{" "}
              <span style={{ fontSize: "70px" }}>no sólo es un proyecto:</span>{" "}
              <br />{" "}
              <span style={{ fontSize: "30px", textDecoration: "underline" }}>
                es el esfuerzo de una comunidad que quiere hacer algo
                diferente...
              </span>
            </em>

            <br />
            <hr />
          </h1>
        </header>
        <div>
          <p>
            Siempre vimos la necesidad de contar con una app que se preocupara
            por un buena experiencia de usuario, pero, sobre todo, por las ganas
            de brindar un excelente servicio, no sólo con su interfaz, sino con
            sus precios y la calidad de los artistas incluidos.
          </p>
          <p style={{ textDecoration: "underline", border: "2px" }}>
            Es sí como nace{" "}
            <strong>
              <em> BEDU Music: Música para Programar. </em>
            </strong>
            Todo esto, de la mano de Victor, Mark, Ivan, Fernando y Leonardo.
          </p>
          <div
            className="container border form-container"
            style={{
              marginTop: "4rem",
              width: "60%",
              backgroundImage: `url('')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <h1
              style={{ marginTop: "25px", color: "white" }}
              className="text-center heading"
            >
              Contáctanos para Solicitar Información Sobre el Proyecto
            </h1>
            <form
              className="row"
              style={{ margin: "25px 85px 75px 100px" }}
              action=""
              onSubmit={sendEmail}
            >
              <label htmlFor="">Nombre</label>
              <input type="text" name="name" className="form-control" />

              <label htmlFor="">Email</label>
              <input type="email" name="user_email" className="form-control" />

              <label htmlFor="">Mensage</label>
              <textarea
                name="message"
                id=""
                cols="30"
                rows="4"
                className="form-control"
              ></textarea>
              <input
                type="submit"
                value="Send"
                className="form-control btn btn-dark mt-4 submit"
                onClick={alerta}
              />
            </form>
          </div>
          <figure>
            <img
              className="img img-fluid mt-3"
              src="https://api-manager.universia.net/coreplatform-document-management/api/document-management/public/qc2quhklmqbsm5"
              alt="BEDU logo"
            />
          </figure>
          <hr />
          <p className="mt-5">
            Con la colaboración entre Santander Universidades y de BEDU, fue
            posible realizar este proyecto, ya que nos dieron todas las bases y
            conocimientos necesarios pa que este proyecto fuera una realidad.
          </p>
          <p>
            Estaremos siempre agradecidos por todo y nos seguimos escuchando.{" "}
          </p>
        </div>
      </article>
      <Footer />
    </body>
  );
};

export default Contact;
