import React from 'react'
import "./Home.css"
import Typed from 'react-typed';



const Home = () => {

  return (
     <section className='home' id='home'>
  
        <div  data-aos="fade-right"
        className='content col-12 col-md-6'> 
          <div className="qutu">
          <h1>Elmir Sultan</h1>
          <p>Developer</p>
          </div>
        </div>
   

        <div data-aos="fade-left"
     data-aos-duration="2500"
        className='welcome col-12 col-md-6'>
        <Typed className='type'
                strings={[
                    '<h1>Welcome To My <br /> Personal Website.</h1>'
                ]}
                // onComplete={(self) => self.cursor.remove()}  
                    typeSpeed={80}
                    // backSpeed={20}
                     loop 
                    showCursor={false}        
                     >

                </Typed>
          
        </div>

     </section>
  )
}

export default Home