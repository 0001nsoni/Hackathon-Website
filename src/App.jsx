// App.js
// import { useState } from 'react';
import Nav from './components/Nav';
import Home from './Page/Home';
import About from './Page/About';
import Track from './Page/Track';
import Contact from './Page/Contact';
import './App.css';
import Faq from './Page/Faq';
import Timeline from './Page/Timeline';
import Sponsors from './Page/Sponsors';
import GuestSlider from './Page/GuestsSlider';
import PrizePool from './Page/PrizePool';
function App() {
  return (
    
    <div className="flex flex-col">
      <Nav />
      <main>
        <Home id="home" />
        <About id="about" />
        <Timeline id="timeline"/>
        <Track id="tracks"/>
        <PrizePool />
        <GuestSlider id="guests"/>
        <Faq id= 'faq'/>
        <Sponsors/>
        <Contact id="contact"/>
      </main>
    </div>
  );
}

export default App;