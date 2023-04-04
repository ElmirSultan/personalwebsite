import React from 'react'
import './About.css'
import Langcards from './Langcards'
import langInfo from '../programs.json'

// Swiper 
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { Autoplay } from 'swiper'


const Languages = () => {
  return (
     <div className="languages" >
       <h1 data-aos="fade-up">Programming languages that I've experienced</h1>
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            324: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            769: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1200:{
              slidesPerView: 3,
              spaceBetween: 50,
            },
            1500:{
              slidesPerView: 4,
              spaceBetween: 50,
            }

           
          }}
        className="mySwiper"
        modules={[Autoplay]}
      >
        <div className="languagesCards row">
         {
          langInfo.map(oneLanguage => (
            <SwiperSlide  key={oneLanguage.id}>
              <Langcards 
             
            imageOfProgram={oneLanguage.imageOfProgram} 
            nameOfProgram={oneLanguage.nameOfProgram} />
            </SwiperSlide>
          ))
         }
        </div>
        </Swiper>
     </div>
  )
}

export default Languages