import React,{useRef} from 'react' 
 import './Contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';

import emailjs from 'emailjs-com';
                                                         
const Contact = () => { 
  
  const form = useRef();
  const sendEmail = (e) => { 
  e.preventDefault();
       emailjs.sendForm ("service_o6uvq4d", "template_pwg528t", form.current, "23aBpaLaqCJKswS4j") 
  //       .then((result) => {
  //         console.log(result.text);
  //  }, (error) => {
  //       console.log(error.text);
  //   });

   e.target.reset();
  }
  

  return (
   <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container"> 
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>adeelryk16@gmail.com</h5>
         <a href="mailto:adeelryk16@gmail.com"  target='_blank' rel="noreferrer">Send a message</a> 
       </article>
   
       <article className="contact_option">
        <RiMessengerLine className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5>Adeel Ahmad</h5>
         <a href="http://m.me/mybot?ref=100025083547593" target='_blank' rel="noreferrer">Send a message</a> 
       </article>

       <article className="contact_option">
        <BsWhatsapp className='contact_option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+923187645751</h5>
         <a href="https://wa.me/+923187645751?"  target='_blank' rel="noreferrer">Send a message</a> 
       </article>
          </div>
          {/* END OF CONTACT OPTIONS */}
          <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required /> 
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
             </div>
        </section>
  )
}
export default Contact