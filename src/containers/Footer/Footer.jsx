import React from 'react';
import './footer.css';
import logo from '../../assets/logo.png';
import { MdOutlineMail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { Link } from 'react-router-dom';

const Contact = ({title, text, icon}) => {
  const Icon = icon;
  return (
  <div className="pisence__footer-links__contact">
    <div className="pisence__footer-links__contact-title">
      <span><Icon/></span><h5>{title}</h5>
    </div>
    <div className="pisence__footer-links__contact-text">
      <span>{text}</span>
    </div>
  </div>
)}

const Footer = () => {
  return (
    <div className='pisence__footer section__padding'>
      <div className="pisence__footer-links">
        <div className="pisence__footer-links_logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="pisence__footer-links_div">
          <h4>Contact Us</h4>
          <Contact title="Call Now" text="+91 90805 75392" icon={FiPhone} />
          <Contact title="Mail" text="support@pisence.com" icon={MdOutlineMail} />
        </div>

        <div className="pisence__footer-links_div">
          <h4>Explore Our Site</h4>
          <p><a href="#home">Home</a></p>
          <p><a href="#about">About Us</a></p>
          <p><a href="#services">Offerings</a></p>
          <p><a href="#contact">Contact</a></p>
        </div>
      </div>
      <div className="pisence__footer-copyright">
        <p>Copyright © PiSence 2023. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer