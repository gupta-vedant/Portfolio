import React from 'react'
import './Contact.css'
import  {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs' 
import  {useRef} from 'react';
import emailjs from 'emailjs-com'
const Contact = () => {
const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_ytr3xpp', 'template_x3fppmu', form.current, 'gOR4nPBr-vbiKorFh')
         
        e.target.reset()
      };

    return (
        <section id='contact'>
            <h5> Get in touch </h5>
            <h2> Contact </h2>


            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                    <MdOutlineEmail className='contact__option-icon'/>
                        <h4>Email</h4>
                        <h5>Vedantg03@gmail.com</h5>
                        <a href="mailto:Vedantg03@gmail.com" target="_blank">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <RiMessengerLine className='contact__option-icon'/>
                        <h4>Messenger</h4>
                        <h5>Vedant Gupta</h5>
                        <a href="https://m.me/Vedant.Gupta111/" target="_blank">Send a message</a>
                    </article>
                    <article className="contact__option">
                    <BsWhatsapp className='contact__option-icon'/>
                        <h4>Whatsapp</h4>
                        <h5>+919068943590</h5>
                        <a href="https://api.Whatsapp.com/send?phone=+9068943590" target="_blank">Send a message</a>
                    </article>
                    

                    </div>
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" name='name' placeholder='Your full name' required/>
                        <input type="email" name='email' placeholder='your email' required/>
                        <textarea name="message" rows="7" placeholder='Your Message' required/>
                        <button type='submit' className='btn btn-primary'>Send Message</button>
                    </form>
                </div>

        </section>
    )
}

export default Contact