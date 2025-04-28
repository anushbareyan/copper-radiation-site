import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SpaceBackground from './components/SpaceBackground';
import Hero from './components/Hero';
import Resources from './components/Resources';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <SpaceBackground />
      <Hero />
      <Resources />
      <Footer />
    </div>
  );
}

export default App;
