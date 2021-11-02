import React from 'react'
import Footer from './components/globals/Footer'
import Header from './components/globals/Header';
import UserGreeting from './components/globals/UserGreeting';
import ContentMain from './components/ContentMain';
import MusicList from './components/MusicList';

const App =()=> {
    return (
      <div className="layout">
        <Header />
        <UserGreeting/> 
        <ContentMain/>
        <MusicList/> 
        <Footer />
      </div>
    )
}

export default App;
