import React from 'react'
import Footer from './components/globals/Footer'
import Header from './components/globals/Header';
import UserGreeting from './components/globals/UserGreeting';
import ContentMain from './components/ContentMain';
import MusicList from './components/MusicList';
import Contacto from './components/Contacto';
import TuMusica from './components/TuMusica';
import Cuenta from './components/Cuenta';
import Descubre from './components/Descubre';


//imports para el ruteo
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { LinkContainer } from 'react-router-bootstrap';

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
          <Route exact path="/cuenta" render={() => {

            return (
              <>
                <Cuenta />
              </>
            )
          }}>
          </Route>
        </Switch>
      </Router>
    </div>

  )
}

export default App;
