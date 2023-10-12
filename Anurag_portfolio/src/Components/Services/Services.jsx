import React from 'react';
import './Services.css';
import Logo from "../../img/logo.png";
import Mearn from "../../img/MERNlogo.png";
import Ux from "../../img/uxlogo.png";
import Card from '../Card/Card';
import Resume from "./AbhijithpResume .pdf";
import { themeContext } from '../../Context';
import { useContext } from 'react';
import {motion} from 'framer-motion';




const Services = () => {
    const transition =  {duration:2, type:'spring'}
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className='services' id='Services'>
            {/* left side */}
            <div className="awesome">
                <span style={{color: darkMode ? 'white' : ''}} >My Awesome</span>
                <span>Services</span>
                <span>
                Self-motivated, adaptable, and reliable front end web developer and backend web developer  <br />
                 driving website and Good quality projects
                    </span>
                <a href={Resume} download>
                    <button className='button s-button'>Download Cv</button>
                </a>

                <div className='blur s-blur1' style={{ background: '#ABF1FF94' }}></div>
            </div>
            {/* Right side */}
            <div className="cards">
                <motion.div
                initial={{left:'25rem'}}
                whileInView={{left:'14rem'}}
                transition={transition}
                 style={{ left: "14rem" }}>
                    <Card
                        emoji={Logo}
                        heading={'Design'}
                        detail={"PhotoShop, Adobe, WordPress, Adobe Xd , Figma "}
                    />
                </motion.div>
                {/* second card */}

                <motion.div
                initial={{ left: "-11rem", top: "12rem" }}
                whileInView={{ left: "-4rem" }}
                transition={transition}
                
                
                style={{ top: "12rem", left: "-4rem" }}>
                    <Card
                        emoji={Mearn}
                        heading={'Developer'}
                        detail={" Html, Css, Bootstrap 5, Jvascript, React, Angular, MongoDb, NodeJs "}
                    />
                </motion.div>

                {/* Third card */}

                <motion.div 
                initial={{ top: "19rem", left: "25rem" }}
                whileInView={{ left: "12rem" }}
                transition={transition}
                style={{ top: "19rem", left: "12rem" }}>
                    <Card
                        emoji={Ux}
                        heading={'UI/UX'}
                        detail={"  A strong sense of creativity and design principles  "}
                    />
                </motion.div>
                <div className='blur s-blur2' style={{ background: 'var(--purple)' }}></div>
            </div>

        </div>


    )
}

export default Services