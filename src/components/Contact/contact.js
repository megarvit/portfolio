import React, { useRef } from 'react';
import './contact.css';
import Walmart from '../../assets/walmart.png';
import Adobe from '../../assets/adobe.png';
import Microsoft from '../../assets/microsoft.png';
import Facebook from '../../assets/facebook.png';
import FacebookIcon from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/twitter.png';
import YoutubeIcon from '../../assets/youtube.png';
import InstagramIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';



const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_i2i0ca5', 'template_2peeo9q', form.current, 'vBkwXNEYhFzepBdJG')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                alert('Email sent!');
            }, (error) => {
                console.log(error.text);
        });
    };
  return (
    <section id="contactPage">
        <div id="clients">
            <h1 className="contactPageTitle">My Clients</h1>
            <p className="clientsDesc">
                I have had the opportunity to work with a diverse group of companies.
                Some of the notable companies I have worked with includes
            </p>
        </div>
        <div id="contact">
            <img src={Walmart} alt="Client" className="clientImg" />
            <img src={Adobe} alt="Client" className="clientImg" />
            <img src={Microsoft} alt="Client" className="clientImg" />
            <img src={Facebook} alt="Client" className="clientImg" />
        </div>
        <div id="contact">
            <h1 className="contactPageTitle2">Contact Me</h1>
            <span className="contactDesc">please fill out the form below to discuss any work opportunities</span>
            <form action="" className="contactForm" ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder='Your Name' name='your_name'/>
                <input type="text" className="email" placeholder='Your Email' name='your_email'/>
                <textarea name="message" className="msg" rows="5" placeholder='Your Message'></textarea>
                <button type='submit' value='send' className="submitBtn">Submit</button>
                <div className="links">
                    <img src={FacebookIcon} alt="Facebook" className="link" />
                    <img src={TwitterIcon} alt="Twitter" className="link" />
                    <img src={YoutubeIcon} alt="Youtube" className="link" />
                    <img src={InstagramIcon} alt="Instagram" className="link" />
        
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact