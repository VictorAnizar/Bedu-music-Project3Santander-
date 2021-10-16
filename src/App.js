import React from 'react'
import Footer from './components/globals/Footer'
import Header from './components/globals/Header';
import ContentMain from './components/ContentMain';
class App extends React.Component {
  render() {
    return (
      <div className="layout">
        <Header />
        <ContentMain/>
        <Footer />
      </div>
    )
  }
}

export default App;
