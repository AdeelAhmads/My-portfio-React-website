import React from 'react';
import './Header.css';
import CTA from './CTA';
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials';
const Header = () => {
  return (
   <header>
        <div id='Home' className="container header__container">
            <h5>Hello I'm</h5>
            <h1>Adeel Ahmad</h1>
            <h5 className='text-light'>Web + Chrome Extension Developer</h5>
            <CTA></CTA>
            <HeaderSocials/>
            <div className='me'>
                <img src={ME} alt="mypic" />
            </div>
            <a href="#contact" className="scroll__down">Scroll Down</a>
        </div>
   </header>
  )
}

export default Header