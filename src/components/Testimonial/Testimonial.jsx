import React from 'react';
import './Testimonial.css';
import AVTR1 from '../../assets/avatar1.jpg' 
import AVTR2 from '../../assets/avatar2.jpg' 
import AVTR3 from '../../assets/avatar3.jpg' 
// import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper stylesn
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonial = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5> 
      <h2>Testimonials</h2>

    <Swiper className="container testimonials_container"
    modules={[Pagination]} 
    spaceBetween={40}
    slidesPerView={1}
    pagination={{ clickable: true }}
    >
      <SwiperSlide className="testimonial">
        <div className="client_avatar">
          <img src={AVTR1} alt="Avatar One" />
          </div>
           <h5 className='client_name'>Ernest Achiever</h5> 
           <small className="client_review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quod nam impedit soluta 
               odio possimus! Quas sint dignissimos distinctio alias rerum laborum aperiam minus
              pariatur, totam dicta, repellendus a voluptatibus!
            </small>
       
      </SwiperSlide>

      <SwiperSlide className="testimonial">
        <div className="client_avatar">
          <img src={AVTR2} alt="Avatar One" />
          </div>
           <h5 className='client_name'>Ernest Achiever</h5> 
           <small className="client_review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quod nam impedit soluta 
               odio possimus! Quas sint dignissimos distinctio alias rerum laborum aperiam minus
              pariatur, totam dicta, repellendus a voluptatibus!
            </small>
       
      </SwiperSlide>


      <SwiperSlide className="testimonial">
        <div className="client_avatar">
          <img src={AVTR3} alt="Avatar One" />
          </div>
           <h5 className='client_name'>Ernest Achiever</h5> 
           <small className="client_review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quod nam impedit soluta 
               odio possimus! Quas sint dignissimos distinctio alias rerum laborum aperiam minus
              pariatur, totam dicta, repellendus a voluptatibus!
            </small>
       
      </SwiperSlide>

      <SwiperSlide className="testimonial">
        <div className="client_avatar">
          <img src={AVTR3} alt="Avatar One" />
          </div>
           <h5 className='client_name'>Ernest Achiever</h5> 
           <small className="client_review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quod nam impedit soluta 
               odio possimus! Quas sint dignissimos distinctio alias rerum laborum aperiam minus
              pariatur, totam dicta, repellendus a voluptatibus!
            </small>
       
      </SwiperSlide>

    </Swiper>
  </section>
  )
}

export default Testimonial