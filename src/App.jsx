import React from 'react'
import Header from './components/header/Header'; 
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Service from './components/services/Service';
import Portfolio from './components/portfolio/Portfolio';
import Testimonial from './components/Testimonial/Testimonial';
import Contact from './components/Contact/Contact';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <div>
        <Header/>
        <Nav/>
        <About/>
        <Experience/>
        <Portfolio/>
        <Service/>
        <Testimonial/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default App