import React, { useRef, useState } from 'react'
import './Contact.css'
import {FaRegWindowClose} from 'react-icons/fa'
import emailjs from '@emailjs/browser';
import contactes from "../assets/images/contactes.jpg"


const Contact = () => {
  const formRef = useRef(); 
  const openForm = (e) =>{
    const clickPlace = e.target;
    const contactLetter = document.querySelector('.contactLetter');
    if(clickPlace.classList.contains = "sendButton"){
      formRef.current.classList.add("aktiv");
      contactLetter.style.display = "none"

    }
  }
  function closeForm(e){
    const clickPlace = e.target;
    const contactLetter = document.querySelector('.contactLetter');
    if(clickPlace.classList.contains = "closeIcon"){
      formRef.current.classList.remove("aktiv");
      contactLetter.style.display = "block"

    }
  }
  
  const formFillRef = useRef();
  const service_Id = "service_hgmzux3"
  const template_Id = "template_ason4i1"
  const public_Key = "3usssEuW5DEkQJdTz"

 const [nameText,setNameText] = useState("")
 const [emailText,setEmailText] = useState("")
 const [topicText,setTopicText] = useState("")
 const [formFilled, setFormFilled] = useState(false);
 
 
  const sendEmail = (e) => {
    e.preventDefault();



    emailjs.sendForm(service_Id, template_Id, formFillRef.current, public_Key)
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    formFillRef.current.reset();
  };


   
    
    function handleNameChange(event) {
    setNameText(event.target.value);
    checkFormValidity();
  }

  function handleEmailChange(event) {
    setEmailText(event.target.value);
    checkFormValidity();
  }

  function handleTopicChange(event) {
    setTopicText(event.target.value);
    checkFormValidity();
  }

  function checkFormValidity() {
    if (nameText && emailText && topicText) {
      setFormFilled(true);
    } else {
      setFormFilled(false);
    }
  }
  
  const completedRef= useRef();
  const letterRef = useRef();

  function completed(e)  {
       const clickElement = e.target;
       const completedPage = document.querySelector('.completed')
       if(clickElement.classList.contains("submitButton")){
        formRef.current.style.display ="none";
        completedPage.classList.add('opened');
       }   
  }
   
   

  return (
    <section className='contact' id='contact'>
       <h1 data-aos="fade-up">Contact</h1>
        <div className='connection'>
          <div className='contactPhoto'>
            <img src={contactes} alt="contact Photo" />
          </div>
          <h3>Elmir Sultan</h3>
          <p>Web Developer</p>
          <div className='contactLinks'>
           <a href="https://www.instagram.com/elmirsultann/" target="_blank" className='instagramLink'>Instagram</a>
           <a href="https://www.linkedin.com/in/elmir-sultan-77b725259/" target="_blank">Linkedin</a>
          </div>
        </div>
       
          <div data-aos="zoom-out-up"
          className='contactLetter' ref={letterRef}>
          <p>hello , <br /></p>
          <p>my name is <span>your name</span> and my e-mail address is <span>your e-mail address</span> <br />
           and I would like to discuss about <span>this project</span></p>
           <button className='sendButton' onClick={openForm} >Send me</button>
        </div>
       
        
        <div className='formSection' ref={formRef} onSubmit={sendEmail}>
          <form ref={formFillRef}>
          <div>
          <label htmlFor="nameText">Your name:</label>
          <input 
          required
          type="text"
          id='nameText'
          name="name"
          placeholder='Your name...'
          value={nameText}
          onChange={handleNameChange} />
          
          </div>

          <div>
            <label htmlFor="emailText">E-mail address:</label>
          <input
           required
           type="email" 
           name="email" 
           id="emailText" 
           placeholder='E-mail address'
           value={emailText}
           onChange={handleEmailChange}/>
          
          </div>
 
          <div>
          <label htmlFor="topicText">Message</label>
          <textarea 
          required
          type="text" 
          id='topicText' 
          name='message' 
          className='topicText'
          placeholder='Write...'
          value={topicText}
          onChange={handleTopicChange}/>
          
          </div>

          {formFilled && (<button type='submit' className='submitButton' onClick={completed}>Submit</button>)}
          </form>
          <FaRegWindowClose className='closeIcon' onClick={closeForm}/>

        </div>
        
        <div className='completed' ref={completedRef} >
        <i className="bi bi-check-circle"></i>
         <p>Completed</p>
        </div>
        

        
    </section>
  )
}

export default Contact