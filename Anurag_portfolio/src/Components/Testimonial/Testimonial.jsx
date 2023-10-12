import React from 'react'
import './Testimonial.css';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Pagination } from "swiper";
// import { themeContext } from '../../Context';
// import { useContext } from 'react';



import profilePic1 from "../../img/mgu.png";
import profilePic2 from "../../img/expertz.png";
import profilePic3 from "../../img/goofreeelab.png";
import profilePic4 from "../../img/mern.png";

SwiperCore.use([Pagination]);

const Testimonial = () => {
  // const theme = useContext(themeContext);
  // const darkMode = theme.state.darkMode;
    const clients = [
        {
          img: profilePic1,
          review:
            "I have completed my graduation in Bsc Computer Science from Mahatma Gandhi University in 2022 With 7.5 CGPA. After my graduation I joined in a course where I buld my knowelge and skill set in MEARN Stack.",
        },
        {
          img: profilePic2,
          review:
            "I joined in a Expertz lab  where I buld my knowelge and skill set in MEARN Stack.It take 7 month to complete that cource .Along with 6 Month internship.",
        },
        {
          img: profilePic3,
          review:
            "After my Intership I joined in GooFree Lab Techologies.Pvt.Ltd as a Junior Fullstack Developer.In thete my role is to handle both frontend and backend in frontend I worken in react js and in backend is node js and express and the server side is mongo db.   ",
        },
        {
          img: profilePic4,
          review:
            "MERN stack is a collection of technologies that enables faster application development.  The main purpose of using MERN stack is to develop apps using JavaScript only.",
        },
      ];
    
      return (
        <div className="t-wrapper" id="Testimonials">
          <div className="t-heading">
            <span>My </span>
            <span> Educaton  </span>
            <span>Details</span>
          <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
          <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
    
          </div>
          <Swiper

     
            // install Swiper modules
            modules={[Pagination]}
           
            slidesPerView={1}
            pagination={{ clickable: true }}
          >
            {clients.map((client, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="testimonial">
                    <img src={client.img} alt="" />
                    <span>{client.review}</span>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
    )
}

export default Testimonial


