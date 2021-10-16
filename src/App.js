import React from 'react'
import Footer from './components/globals/Footer'
import Header from './components/globals/Header';

class App extends React.Component {
  render() {
    return (
      <div className="layout">
        <Header />
        <Footer />
      </div>
    )
  }
}

export default App;
