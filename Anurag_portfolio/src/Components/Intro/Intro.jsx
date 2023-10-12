import React from 'react';
import './Intro.css'
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";

import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";

import Anu3 from "../../img/anurag3.png";
import glassesimoji from "../../img/glassesimoji.png";

import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png"
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { themeContext } from '../../Context';
import { useContext } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Cursor, useTypewriter } from 'react-simple-typewriter'






const Intro = () => {

  const transition = { duration: 2, type: 'spring' }
  const [text] = useTypewriter({
    words: ['Mearn Developer', 'Fullstack Devleoper'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 100,
  })



  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">

          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Abhijith P </span>
          <h1 style={{ fontWeight: "bold", fontSize: "27px", color: darkMode ? "white" : "black" }}>

            I'm a {' '}

            <span style={{ fontWeight: "bold", color: 'orange' }}>
              {text}
            </span>
            <Cursor cursorColor='green' cursorStyle="|" />
          </h1>

          <span >
            Mearn Stack Developer with high level of experience in both frontend
            and  backend ,familiar with apis , producting the Quality work
          </span>
        </div>
        <Link to="Contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <a href="https://github.com/abhijithp327"><img src={Github} alt="" /></a>

          <a href="https://www.linkedin.com/in/abhijithp327/"><img src={LinkedIn} alt="" /></a>

          <a href="https://www.instagram.com/abhijithp1221/?next=%2F&hl=en"><img src={Instagram} alt="" /></a>
          

        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={Anu3} alt="" />
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
          style={{ top: '-4rem', left: '68rem' }}
        >
          <FloatingDiv image={crown} text1="Web" text2="Developer" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >

          <FloatingDiv image={thumbup} text1="Fullstack" text2="Developer" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Intro;
