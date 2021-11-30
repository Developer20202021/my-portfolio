import React, { useRef } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';

const Contact = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_hfyiqag', 'template_noq6v2i', form.current, 'user_X8svlsru3f7UZofyLM5Hh')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

          
      }
      
      







    return (
        <div className='form-box'>



            <form ref={form} onSubmit={sendEmail} >
            		<input name="name" placeholder="Enter Your Name" class="name" required />
            		<input name="email" placeholder="Enter Your Email" class="email" type="email" required />
                <textarea rows="4" cols="50" name="message" placeholder="Please enter your message" class="message" required></textarea>
                <input name="submit" class="btn" type="submit" value="Send" />
               
            </form>
                




            
        </div>
    );
};

export default Contact;