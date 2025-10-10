import React from 'react'
import headshot from '../../assets/images/profile_picture.jpg'
import './Banner.css'

function Banner() {
    return (
        <div className="Banner_outer_container">
            <header classNameName="text-center py-5 bg-white shadow-sm">
                <img 
                src={headshot} 
                alt="Profile Picture" className="rounded-circle border border-4 border-light shadow mb-4" width="340" height="340" />
                <h1 className="fw-bold">Eyobel Gebremichael</h1>
                <p className="fw-semibold">Software Developer | Washington, DC</p>
            </header>
        </div>
    )
}
export default Banner
