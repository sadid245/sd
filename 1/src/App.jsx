import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Components/Navigation/Navigation';
import Slides from './Components/Slides/Slides';
import Services from './Components/Services/Services';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Reviews from './Components/Reviews/Reviews';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
const App = () => {
  return (
    <div class="new">
      <Navigation/>
      <Home/>
      <Slides/>
      
      <Services/>
      <Reviews/>
      <Footer/>
    </div>
  );
};

export default App;