import React from 'react'
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {BsFacebook} from 'react-icons/bs';
import {SiFiverr} from 'react-icons/si';

function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/adeel-ahmad-50b084210/" target="_blank" rel="noreferrer"> <BsLinkedin /></a>
        <a href="https://github.com/AdeelAhmads" target="_blank" rel="noreferrer"><BsGithub/></a>
        <a href="https://www.facebook.com/profile.php?id=100025083547593" target="_blank" rel="noreferrer"> <BsFacebook/></a>
        <a href="https://www.fiverr.com/users/adeelahmad848/" target="_blank" className='fiverr' rel="noreferrer"> <SiFiverr/></a>
    </div>
  )
}

export default HeaderSocials