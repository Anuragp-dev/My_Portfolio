import React from 'react'
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";

const Footer = () => {
  return (
    <div className='footer'>
      <img src={Wave} alt="" style={{width:"100%"}}/>
      <div className="f-content">
        <span style={{fontWeight:"700"}}>abhijithp327@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.instagram.com/abhijithp1221/?next=%2F&hl=en"><Insta color='white' size='3rem'/></a>
            
            <a href="https://github.com/abhijithp327"> <Gitub color='white' size='3rem'/></a>

           <a href="https://www.linkedin.com/in/abhijithp327/"><Linkedin color='white' size='3rem'/></a>
            
        </div>
        <span style={{fontWeight:"500"}}> &copy;2023 Abhijith P. All rights reserved</span>
      </div>
    </div>
  )
}

export default Footer
