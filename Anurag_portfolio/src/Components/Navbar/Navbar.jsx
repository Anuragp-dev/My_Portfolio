import React from 'react'
import "./Navbar.css"
import Toggle from '../Toggle/Toggle'
import { Link } from 'react-scroll';





function Navbar() {
    return (
        <div className='n-wrapper' >
            <div className='n-left'>
                <div className='n-name'>Abhijith</div>

                <Toggle />

            </div>
            <div className='n-right'>
                <div className="n-list">
                    <ul style={{ listStyleType: 'none' }}>
                        <Link className='link' spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
                            <li style={{fontWeight:"bold"}}>Home</li>
                        </Link>
                        <Link className='link' spy={true} to='Services' smooth={true} activeClass='activeClass'>
                            <li style={{fontWeight:"bold"}}>Services</li>
                        </Link>
                        <Link className='link' spy={true} to='Experience' smooth={true} activeClass='activeClass'>
                            <li style={{fontWeight:"bold"}}>Experience</li>
                        </Link>
                        <Link className='link' spy={true} to='Protfolio' smooth={true} activeClass='activeClass'>
                            <li style={{fontWeight:"bold"}}>Projects</li>
                        </Link>
                        <Link className='link' spy={true} to='Testimonials' smooth={true} activeClass='activeClass'>
                            <li style={{fontWeight:"bold"}} >Education</li>
                        </Link>
                    </ul>
                </div>
                <Link spy={true} to='Contact' smooth={true} activeClass='activeClass'  className='button n-button'>
                    Contact
                </Link>
            </div>

        </div>
    )
}

export default Navbar