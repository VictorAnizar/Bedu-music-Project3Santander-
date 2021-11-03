import React from 'react'
import Footer from './components/globals/Footer'
import Header from './components/globals/Header';
import UserGreeting from './components/globals/UserGreeting';
import ContentMain from './components/ContentMain';
import MusicList from './components/MusicList';
import Contacto from './components/Contacto';
import TuMusica from './components/TuMusica';
import Perfil from './components/Perfil';
import Descubre from './components/Descubre';
import Configuracion from './components/Configuracion';
import PageNotFound from './components/PageNotFound';



import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";

//imports para el ruteo
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { LinkContainer } from 'react-router-bootstrap';
import AudioPlayer from './components/AudioPlayer';

const App = () => {
  return (
    <div className="layout">

      <Router>
        <Header />


        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                <ContentMain />
                <MusicList />
                <Footer />
              </>
            )

          }}>
          </Route>
          <Route exact path="/tu-musica" render={() => {
            return (
              <>
                <TuMusica />
              </>
            )

          }}>
          </Route>
          <Route exact path="/descubre"
            render={() => {

              return (
                <>
                  <Descubre />
                </>
              )
            }}>
          </Route>
          <Route exact path="/contacto" render={() => {

            return (
              <>
                <Contacto />
              </>
            )
          }}>

          </Route>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/profile" component={Profile} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>

      <Footer/>
    </div>

  )
}

export default App;