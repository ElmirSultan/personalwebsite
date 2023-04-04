import React,{useRef} from 'react'
import './Navbar.css'
import ownLogo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'
import {AiOutlineBars} from 'react-icons/ai/'
import {FaWindowClose} from 'react-icons/fa'

const Navbar = () => {
  const overlayRef = useRef();
  
  function openOverlay(e){
  const clickElement = e.target
   if(clickElement.classList.contains("bars-icon")){
  overlayRef.current.classList.add("aktiv");
  document.querySelector(".navbar").style.visibility = "hidden";
  }
  }
  const closeOverlay = (e) =>{
    const clickElement = e.target;
     if(clickElement.classList.contains("uparrow")){
       overlayRef.current.classList.remove("aktiv"); 
       document.querySelector(".navbar").style.visibility = "visible";
     }
  }

  function sectionTikla(e){
    const clickElement = e.target
    if(clickElement.classList.contains("navlink")){
      overlayRef.current.classList.remove("aktiv");
      document.querySelector('.navbar').style.visibility = "visible"
    }
  }
  
 

  return (
   <header>
    
    <div className='overlay' ref={overlayRef}>
    <button className='uparrow' onClick={closeOverlay}><FaWindowClose className='windowclose'/></button>
    <div className='nav-links'>
      <Link to="/" className="navlink" onClick={sectionTikla} >Home</Link>
      <Link to="/aboutme" className="navlink" onClick={sectionTikla} >About</Link>
      <Link to="/contact" className="navlink" onClick={sectionTikla} >Contact</Link>
    </div>
  
   </div>
     <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <img src={ownLogo} alt="ElmirSultan logo" />
    </a>
    <button className="navbar-toggler bars-icon" onClick={openOverlay} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <AiOutlineBars className='bobmarley'/>
    </button>

    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/aboutme">About Me</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
   </header>
  )
}

export default Navbar