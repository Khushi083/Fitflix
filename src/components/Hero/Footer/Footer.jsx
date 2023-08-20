import React from 'react'
import './Footer.css'
import Github from './../../../assets/github.png'
import Instagram from './../../../assets/instagram.png'
import Linkdin from './../../../assets/linkedin.png'
import Logo from './../../../assets/logo.png'

const Footer = () => {
    return (
        <div className="Footer_container">
            <hr />
            <div className="footer">
                <div className="social_links">

                <a href="https://github.com/Khushi083" ><img src={Github} className='social_links-image' alt="" /></a>
                    
                <a href="https://instagram.com/khushi_9701_?igshid=MzRlODBiNWFlZA==" > <img src={Instagram} className='social_links-image' alt="" /></a>
                <a href="https://www.linkedin.com/in/khushi-kumari-159a16220" >  <img src={Linkdin} className='social_links-image' alt="" /></a>
                </div>
                <div className="logo_f">
                    <img src={Logo} alt="" />
                </div>
            </div>

            <div className="blur blur_f_1"></div>
            <div className="blur blur_f_2"></div>

        </div>
    )
}

export default Footer