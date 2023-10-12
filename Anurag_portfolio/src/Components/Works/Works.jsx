import React from 'react';
import "./Works.css";

import Redux from "../../img/redux.png";
import Jsx from "../../img/jsx.png";
import Node from "../../img/NODEJS.png";
import Mongo from "../../img/mong.png";
import Ants from "../../img/ants.png";
import { themeContext } from '../../Context';
import { useContext } from 'react';
import {motion} from 'framer-motion';
import { Link } from 'react-scroll';




const Works = () => {
  
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className='works'>
            {/* left side */}
            <div className="awesome">
                <span style={{color: darkMode ? 'white' : ''}} >Work within all of this </span>
                <span>Libraries & Toolkits</span>
                <span>
                    Work with these library and toolkits 
                    Good knowledge in these frameworks.
                    <br />
                    Familiar with (React , Redux , Node , Express , Angular , Mongo db)
                    <br />
                    Familiar with typescript , javascript , jsx 
                </span>


                <Link to="Contact" smooth={true} spy={true}>
            <button className="button s-button">Hire me</button>
          </Link>

                <div className='blur s-blur1' style={{ background: '#ABF1FF94' }}></div>
            </div>
            {/* rigth side */}
            <div className='w-right'>
                <motion.div
                initial={{ rotate : 45}}
                whileInView={{ rotate : 0}}
                viewport={{margin : '-40px'}}
                transition={{duration: 3.5, type: 'spring'}}
                 className="w-mainCircle">
                    <div className="w-secCircle">
                        <img src={Redux} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Node} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Jsx} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Mongo} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Ants} alt="" />
                    </div>
                </motion.div>
                
                {/* background circle */}

                <div className='w-backCircle blueCircle'></div>
                <div className='w-backCircle yellowCircle'></div>
        
            </div>
        </div>
    )
}

export default Works;
