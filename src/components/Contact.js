import React, { useState } from "react";
import emailjs, { send } from "emailjs-com";

const Contact = () => {
  /*   const [email, setEmail] = useState(""); */

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
    <div
      className="container border"
      style={{
        marginTop: "50px",
        width: "60%",
        backgroundImage: `url('')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <h1 style={{ marginTop: "25px", color: "black" }} className="text-center">
        Contáctanos y suscríbete para recibir noticias
      </h1>
      <form
        className="row"
        style={{ margin: "25px 85px 75px 100px" }}
        action=""
        onSubmit={sendEmail}
      >
        <label htmlFor="">Name</label>
        <input type="text" name="name" className="form-control" />

        <label htmlFor="">Email</label>
        <input type="email" name="user_email" className="form-control" />

        <label htmlFor="">Message</label>
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
          className="form-control btn btn-dark mt-4"
        />
      </form>
    </div>
  );
};

export default Contact;
