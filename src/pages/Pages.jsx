import React from 'react'
import Home from '../components/Home';
import About from '../components/About';
import Comments from '../components/Comments';
import Contact from '../components/Contact';
import Languages from '../components/Languages';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
const Pages = () => {
  return (
    <>
    
    <div className="main-container">
    <Navbar />
     <Home />
     <About />
     <Languages />
     <Comments />
     <Contact />  
     <Footer />
    </div>
    
    </>
  )
}

export default Pages