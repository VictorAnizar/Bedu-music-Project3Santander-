import React from "react";
import Footer from "./components/globals/Footer";
import Header from "./components/globals/Header";
import UserGreeting from "./components/globals/UserGreeting";
import ContentMain from "./components/ContentMain";
import MusicList from "./components/MusicList";
import Contact from "./components/Contact";
import TuMusica from "./components/TuMusica";
import Cuenta from "./components/Cuenta";
import Descubre from "./components/Descubre";

//imports para el ruteo
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { LinkContainer } from "react-router-bootstrap";
import AudioPlayer from "./components/AudioPlayer";

const App = () => {
  return (
    <div className="layout">
      <Router>
        <Header />

        <Switch>
          <Route
            
            path="/"
            render={() => {
              return (
                <>
                  <ContentMain />
                  <MusicList />
                  <Footer />
                </>
              );
            }}
          ></Route>
          <Route
            exact
            path="/tu-musica"
            render={() => {
              return (
                <>
                  <TuMusica />
                </>
              );
            }}
          ></Route>
          <Route
            exact
            path="/descubre"
            render={() => {
              return (
                <>
                  <Descubre />
                </>
              );
            }}
          ></Route>
          <Route
            exact
            path="/contacto"
            render={() => {
              return (
                <>
                  <Contact />
                </>
              );
            }}
          ></Route>
          <Route
            exact
            path="/cuenta"
            render={() => {
              return (
                <>
                  <Cuenta />
                </>
              );
            }}
          ></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
