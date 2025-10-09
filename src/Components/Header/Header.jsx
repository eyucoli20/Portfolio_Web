import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className="header_outer_container">
            <div className='header_container'>
                <div className= 'header_left'>
                    <p>Eyobel Gebremichael</p> 
                </div> 
                    <div className='header_right'>
                        <ul >
                                <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                                <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
                                <li className="nav-item"><a className="nav-link" href="#experience">Experience</a></li>
                                <li className="nav-item"><a className="nav-link" href="#blogs">Blogs</a></li>
                                <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
                        </ul>
                    </div>
            </div>
        </div>      
    )
}

export default Header
