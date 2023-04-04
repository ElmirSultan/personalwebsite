import React from 'react'
import './Footer.css'
import ownLogo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'
const footer = () => {
  return (
    <footer>
        <div className="box-container">
       
             <img src={ownLogo} alt="" />
         
          <div className="middleside">
             <Link to="/aboutme">About Me</Link>
             <Link to="/contact">Contact</Link>

          </div>
          <div className="logos">
            <a href="https://www.instagram.com/elmirsultann/" target="_blank"><i className="bi bi-instagram"></i></a>
            <a href="https://github.com/ElmirSultan" target="_blank"><i className="bi bi-github"></i></a>
            <a href="https://www.linkedin.com/in/elmir-sultan-77b725259/" target="_blank"><i className="bi bi-linkedin"></i></a>
            <a href="mailto:elmirsultann@gmail.com"><i className="bi bi-envelope-check"></i></a>
          </div>
          
        </div>
        <div className="copyright">
          <span>elmirsultan.com © 2023</span>
        </div>
    </footer>
  )
}

export default footer