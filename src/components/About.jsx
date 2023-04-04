import React, { useRef } from 'react'
import profilePhoto from '../assets/images/profile.png'
import './About.css'




const About = () => {

  
  const style0 = { '--i': 0 };
  const style1 = { '--i': 1 };
  const style2 = { '--i': 2 };
  const style3 = { '--i': 3 };
  return (
    
    <section className='aboutMe' id='aboutMe'>
      
      <h1 data-aos="fade-up">About Me</h1>
     
     <div className="boxes">
   
     <div data-aos="zoom-in-down"
     data-aos-duration="1500"
      className="left-side col-12 col-md-5">
      <div className='hoop'>
     
            <div className="glow"></div>
            <div>
              <span style={style0}></span>
              <span style={style1}></span>
              <span style={style2}></span>
              <span style={style3}></span>
            </div>
      </div>
           
     </div>
  

     
        <div  data-aos="flip-up"
        className="right-side col-12 col-md-7">
            <h3>Elmir Sultan</h3>
            <p>Hi there! My name is Elmir Sultan and I am a dynamic and driven Front-End developer based in Azerbaijan. <br />
             With a strong background in creating visually appealing and user-friendly websites, I am always looking for new and exciting projects to tackle. <br />

My passion for technology and drive to improve have led me to expand my skills to the back-end, and I am currently learning Java and Python to further my expertise in web development. <br />
 I am a quick learner, and I have a track record of adapting to new technologies and programming languages with ease. <br />

In my professional career, I have a proven track record of delivering high-quality results for my clients and customers. <br />
 I am always striving to find new and innovative solutions to complex problems, and I am committed to delivering projects that exceed my clients' expectations. <br />

In my free time, I am a voracious learner who enjoys staying up-to-date with the latest advancements in technology. I am particularly interested in artificial intelligence and machine learning, and I am eager to apply my skills in these areas to make a positive impact in the world.

Overall, I am a dedicated and motivated individual with a passion for technology and a drive to always improve. If you're looking for a talented front-end developer with a strong work ethic and a commitment to excellence, I would love the opportunity to work with you!</p>
        </div>
      
     </div>
    
    </section>
  )
}

export default About