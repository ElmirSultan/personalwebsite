import React from 'react'
import Commentcards from './Commentcards'
import "./Comments.css"
import commentsJson from '../comments.json'


import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
// import { Pagination } from "swiper";
import { Autoplay } from 'swiper'

const Comments = () => {
  return (
    <section className='comments'>
       <h1 data-aos="fade-up">Comments</h1>
        <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
       
        modules={[Autoplay]}
        className="mySwiper"
      >
        <div className='commentCardsContainer row '>
            {
              commentsJson.map(oneComment => (
              <SwiperSlide key={oneComment.id}>
                    <Commentcards 
                nameOfPerson={oneComment.name}
                imageOfPerson={oneComment.imageOfUser}
                commentOfPerson={oneComment.comment}
                instagramOfPerson = {oneComment.instagramOfUser}
                instagramName ={oneComment.instagramName}
                 />
                 </SwiperSlide>
               
              
              ))
            }
        </div>
        </Swiper>
     </section>
  )
}

export default Comments