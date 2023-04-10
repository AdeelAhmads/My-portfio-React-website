import React from 'react';
import './About.css';
import ME from '../../assets/me-about.jpg';
import {FaAward} from 'react-icons/fa';
import {FiUser} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';


const About = () => {
  return (
    <section id='about'>
     <h5>Get To Know</h5>
     <h2>About Me</h2>
     <div className='container about__container'>

        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="pics" />
          </div>
        </div>

      <div className='about__content'>
        <div className='about__cards'>

          <article className='about__card'>
                 <FaAward className='about__icon'></FaAward>
                 <h5>Experience</h5>
                 <small>1+ Years Working</small>
          </article>

          <article className='about__card'>
                 <VscFolderLibrary className='about__icon'></VscFolderLibrary>
                 <h5>Projects</h5>
                 <small>20+ Completed</small>
          </article>

          <article className='about__card'>
                 <FiUser className='about__icon'></FiUser>
                 <h5>Clients</h5>
                 <small>20+ Worldwide</small>
          </article>

        </div>

        <p>As a full-stack web developer and chrome extension developer, I have a wealth of experience in creating high-quality and user-friendly websites and chrome extensions. With my strong background in front-end and back-end development, I am able to take on a wide range of projects and deliver top-notch results. Whether you need a new website or a custom chrome extension, I have the skills and expertise to make it happen. I am committed to delivering exceptional work and exceeding my client's expectations every time. Let me help bring your project to life and make it a success.</p>
        
    <a href="#contact" className='btn btn-primary'>Let's Talk</a>

      </div>
   </div>
    
 
  
    
      </section>
  )
}

export default About