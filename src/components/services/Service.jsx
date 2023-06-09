import React from 'react'
import './Service.css'
import {BiCheck} from 'react-icons/bi';
function Service() {
  return (
    <section id='services'> 
    <h5>What I offer</h5> 
    <h2>Services</h2>
    <div className="container services_container"> 
      <article className="service">
         <div className="service_head"> 
            <h3>UI/UX Design</h3>
         </div>
       <ul className="service_list"> 
         <li>
           <BiCheck className='service_list-icon' /> 
           <p>Lorem, ipsum dolor sit amet consectetur elit.</p> 
         </li>
         <li>
           <BiCheck className='service_list-icon' /> 
           <p>Lorem, ipsum dolor sit amet consectetur elit.</p> 
         </li>
         <li>
           <BiCheck className='service_list-icon' /> 
           <p>Lorem, ipsum dolor sit amet consectetur elit.</p> 
         </li>
         <li>
           <BiCheck className='service_list-icon' /> 
           <p>Lorem, ipsum dolor sit amet consectetur elit.</p> 
         </li>
         <li>
           <BiCheck className='service_list-icon' /> 
           <p>Lorem, ipsum dolor sit amet consectetur elit.</p> 
         </li>
         <li>
           <BiCheck className='service_list-icon' /> 
           <p>Lorem, ipsum dolor sit amet consectetur elit.</p> 
         </li>
         <li>
           <BiCheck className='service_list-icon' /> 
           <p>Lorem, ipsum dolor sit amet consectetur elit.</p> 
         </li>
       </ul>
     </article>

     {/* {end of UI/UX} */}
     <article className="service">
         <div className="service_head"> 
            <h3>Web Developement</h3>
         </div>
       <ul className="service_list"> 
         <li>
           <BiCheck className='service_list-icon' /> 
           <p>Lorem, ipsum dolor sit amet consectetur elit.</p> 
         </li>
         <li>
           <BiCheck className='service_list-icon' /> 
           <p>Lorem, ipsum dolor sit amet consectetur elit.</p> 
         </li>
         <li>
           <BiCheck className='service_list-icon' /> 
           <p>Lorem, ipsum dolor sit amet consectetur elit.</p> 
         </li>
         <li>
           <BiCheck className='service_list-icon' /> 
           <p>Lorem, ipsum dolor sit amet consectetur elit.</p> 
         </li>
         <li>
           <BiCheck className='service_list-icon' /> 
           <p>Lorem, ipsum dolor sit amet consectetur elit.</p> 
         </li>
         <li>
           <BiCheck className='service_list-icon' /> 
           <p>Lorem, ipsum dolor sit amet consectetur elit.</p> 
         </li>
         <li>
           <BiCheck className='service_list-icon' /> 
           <p>Lorem, ipsum dolor sit amet consectetur elit.</p> 
         </li>
       </ul>
     </article>

     <article className="service">
         <div className="service_head"> 
            <h3>Content Creation</h3>
         </div>
       <ul className="service_list"> 
         <li>
           <BiCheck className='service_list-icon' /> 
           <p>Lorem, ipsum dolor sit amet consectetur elit.</p> 
         </li>
         <li>
           <BiCheck className='service_list-icon' /> 
           <p>Lorem, ipsum dolor sit amet consectetur elit.</p> 
         </li>
         <li>
           <BiCheck className='service_list-icon' /> 
           <p>Lorem, ipsum dolor sit amet consectetur elit.</p> 
         </li>
         <li>
           <BiCheck className='service_list-icon' /> 
           <p>Lorem, ipsum dolor sit amet consectetur elit.</p> 
         </li>
         <li>
           <BiCheck className='service_list-icon' /> 
           <p>Lorem, ipsum dolor sit amet consectetur elit.</p> 
         </li>
         <li>
           <BiCheck className='service_list-icon' /> 
           <p>Lorem, ipsum dolor sit amet consectetur elit.</p> 
         </li>
         <li>
           <BiCheck className='service_list-icon' /> 
           <p>Lorem, ipsum dolor sit amet consectetur elit.</p> 
         </li>
       </ul>
     </article>
      </div>
  </section>
  )
}

export default Service