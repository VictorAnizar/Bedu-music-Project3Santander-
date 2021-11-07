import * as React from "react";
import "../../css/Footer.css";
/* import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container"; */
// import CssBaseline from '@mui/material/CssBaseline';
// import { Button, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-bootstrap';

function Copyright() {
  return (
    <>
      {"Copyright © "}

      {new Date().getFullYear()}
      {"."}
    </>
  );
}

const Footer = () => {
  return (
    <section className="footer">
      <hr className="footer-seperator" />
      <section style={{ fontSize: "20px" }} className="footer-social-media">
        <a
          href="https://www.linkedin.com/school/beduorg/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </section>
      <section className="footer-info p-5">
        <section className="footer-info-left col-md-4 ">
          <section className="footer-info__name" style={{ fontSize: "20px" }}>
            BEDU MUSIC
          </section>
          <section
            className="footer-info__returns"
            style={{ fontSize: "20px" }}
          >
            Subscription
            <br />
            Music
          </section>
        </section>
        <section className="footer-info-center col-md-4 ">
          <section className="footer-info__email" style={{ fontSize: "20px" }}>
            bedu@music.com
          </section>
          <section style={{ fontSize: "20px" }} className="footer-info__terms">
            Terms and Conditions
            <br />
            <Copyright />
          </section>
        </section>
        <section className="footer-info-right text-center  col-md-4">
          <section
            className="footer-info__number"
            style={{ fontSize: "15px" }}
          ></section>
          <section
            style={{ fontSize: "20px" }}
            className="footer-info__contact"
          >
            Our Story
            <br />
            Contact Us
          </section>
        </section>
      </section>
      <hr className="footer-seperator" />
    </section>
  );
};

/* <Box textAlign="center">
      <Box
        textAlign="center"
        component="footer"
        sx={{
          py: 1,
          px: 1,
          mt: "auto",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[900]
              : theme.palette.grey[400],
        }}
      >
        <Container maxWidth="sm" textAlign="center">
          <Typography
            fontSize="25px"
            variant="body1"
            color="white"
            textAlign="center"
          >
            Bedu Music
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </Box> */

export default Footer;
