import React from 'react'
import { useNavigate } from 'react-router-dom';
import errorImage from "../assets/images/404space.png"
import "./css/NotFound.css"


const NotFound = () => {

  const navigate = useNavigate();
  function backHome(){
    navigate('/')
  }
  return (
    <div className='errorPage'>
      <div className="left-side">
        <h1>Whoops!</h1>
        <p>Looks like you took a wrong turn! This page doesn't exist, but don't worry, no one's perfect.</p>
        <button onClick={backHome} className='goback'><i className="bi bi-chevron-double-left"></i> GO BACK</button>
      </div>
      <div className="right-side">
        <img src={errorImage} alt="404 Error Not Found" />
      </div>
    </div>
    
  )
}

export default NotFound