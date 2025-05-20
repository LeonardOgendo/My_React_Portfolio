import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import ImageSlider from "./ImageSlider";
import {  FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_zck1xkp",     // Replace with your EmailJS service ID
        "template_w40hp2o",    // Replace with your EmailJS template ID
        form.current,
        "dlBp6sQi_QMyXsOWn" // Replace with your public key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section className="contact-section" id="contact">
      <h2><span style={{ color: '#fff' }}>Contact</span> <span style={{ color: '#fd4312' }}>Me</span></h2>

      <div className="contact-row">
        <div className="contact-box1">
            <ImageSlider />

            <div className="social">
              <p>Or directly on: </p>
              <a href="https://www.linkedin.com/in/leonard-ogendo-58ab01225" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href="https://github.com/LeonardOgendo/" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            </div>
        </div>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email (For Reply)" required />
            <textarea name="message" placeholder="Your Message" rows="5" required />
            <button type="submit">Send Message</button>
        </form>
      </div>
      
    </section>
  );
};

export default Contact;
