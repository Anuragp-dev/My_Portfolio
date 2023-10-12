import React from 'react';
import './Card.css';

const Card = ({emoji, heading, detail }) => {
  return (
    <div className='card'>
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>


      <a href="https://www.wearecapicua.com/blog/mern-stack-uxui-design#:~:text=The%20MERN%20stack%20is%20a,a%20UX%2FUI%20design%20perspective%3F">
        <button className='c-button'>Learn More</button></a>
      
    </div>
  )
}

export default Card;
