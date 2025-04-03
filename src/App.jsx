// App.js
// import { useState } from 'react';
import Nav from './components/Nav';
import Home from './Page/Home';
import About from './Page/About';
import Track from './Page/Track';
import Contact from './Page/Contact';
import './App.css';

function App() {
  return (
    
    <div className="flex flex-col">
      <Nav />
      <main>
        <Home id="home" />
        <About id="about" />
        <Track id="tracks"/>
        <Contact id="contact"/>
      </main>
    </div>
  );
}

export default App;