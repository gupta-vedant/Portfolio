import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Contact from './components/contact/Contact'
import Portfolio from './components/portfolio/Portfolio'
import Services from './components/services/Services'
import Footer from './components/footer/Footer'


import React from 'react'

const App = () => {
  return (
  <>
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    <Portfolio/>
    <Services/>
    <Contact/>
    <Footer/>
  </>
  );
}

export default App;


