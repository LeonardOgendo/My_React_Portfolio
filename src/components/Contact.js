import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import ImageSlider from "./ImageSlider";
import { FaEnvelope, FaLinkedin, FaTwitter, FaXTwitter } from 'react-icons/fa';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "your_service_id",     // Replace with your EmailJS service ID
        "your_template_id",    // Replace with your EmailJS template ID
        form.current,
        "your_user_public_key" // Replace with your public key
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
              <a href="#"><FaLinkedin /></a>
              <a href="#"><FaTwitter /></a>
            </div>
        </div>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
            <input type="text" name="user_name" placeholder="Your Name" required />
            <input type="email" name="user_email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" rows="5" required />
            <button type="submit">Send Message</button>
        </form>
      </div>
      
    </section>
  );
};

export default Contact;
