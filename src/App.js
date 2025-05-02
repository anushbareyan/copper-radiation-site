import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SpaceBackground from "./components/SpaceBackground";
import Hero from "./components/Hero";
import Resources from "./components/Resources";
import Footer from "./components/Footer";
import Feedback from "./components/Feedback";
function App() {
  return (
    <div className="App">
      <SpaceBackground />
      <Hero />
      <Resources />
      <Feedback />
      <Footer />
    </div>
  );
}

export default App;
