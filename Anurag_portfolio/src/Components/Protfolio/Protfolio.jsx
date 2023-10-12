import React from 'react'
import"./Protfolio.css"
import {Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import "swiper/components/pagination/pagination.min.css";
import  { Pagination } from "swiper";
// import 'swiper/css'
import Digitic from "../../img/digitic.png";
import Ecommerce from "../../img/admin1.png";
import blog from "../../img/blog.png";
import Ui from "../../img/ui.png";
import Food from "../../img/foodapp.png";
import { themeContext } from '../../Context';
import { useContext } from 'react';




const Protfolio = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;


  return (
    <div className='protfolio' id='Protfolio'>
      {/* heading */}
      <span style={{color: darkMode ? 'white' : ''}} >My Latest</span>
      <span> Projects</span>

      {/* slidder */}
      <Swiper
      
      spaceBetween = {20}
      grabCursor={true}
      className='protfolio-slider'
      modules={[Pagination]}
           
      slidesPerView={3}
      pagination={{ clickable: true }}
     
      >
        
        <SwiperSlide>
            <img src={Digitic} alt="" />
        </SwiperSlide>

        <SwiperSlide>
            <img src={Ecommerce} alt="" />
        </SwiperSlide>

        <SwiperSlide>
            <img src={Ui} alt="" />
        </SwiperSlide>

        <SwiperSlide>
            <img src={blog} alt="" />
        </SwiperSlide>

        <SwiperSlide>
            <img src={Food} alt="" />
        </SwiperSlide>



      </Swiper>

    </div>
  )
}

export default Protfolio
