import React from 'react' 
import './Footer.css'
import {FaFacebookF} from 'react-icons/fa';
import {FiInstagram} from 'react-icons/fi';
import {IoLogoTwitter} from 'react-icons/io';
const Footer = () => {
  return (
     <footer>
       <a href="#Home" className='footer_logo'>ADEEL AHMAD</a>
          <ul className='permalinks'>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li> 
            <li><a href="#services">Services</a></li> 
            <li><a href="#portfolio">Portfolio</a></li> 
            <li><a href="#testimonials">Testimonials</a></li> 
            <li><a href="#contact">Contact</a></li> 
          </ul>
    <div className="footer_socials">
      <a href="https://www.facebook.com/profile.php?id=100025083547593"><FaFacebookF/></a> 
      <a href="https://www.instagram.com/adeelryk16/" className='instagram'><FiInstagram/> </a> 
      <a href="https://twitter.com"><IoLogoTwitter/></a> 
    </div>
    <div className="footer__copyright">
      <small>
        &copy;Adeel Ahmad all rights reserved
      </small>
    </div>
   </footer>
  )
}

export default Footer