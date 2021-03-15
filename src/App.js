import React from 'react';
import './resources/style.css';
import { Element } from "react-scroll";
import Header from './Compomemts/Header_Footer/Header';
import Slider from './Compomemts/Slider';
import Info from './Compomemts/Info';
import Highlights from './Compomemts/Highlights';
import Pricing from './Compomemts/Pricing';
import Location from './Compomemts/Location';
import Footer from './Compomemts/Header_Footer/Footer'
function App() {
  return (
    <div className="App">
      <Header />
      <Element name="start-events">
        <Slider />
      </Element>
      <Element name="react-info">
        <Info />
      </Element>
      <Element name="out-team">
        <Highlights />
      </Element>
      <Element name="pricing">
        <Pricing />
      </Element>
      <Element name="location">
        <Location />
      </Element>

      <Footer />
    </div>
  );
}

export default App;
