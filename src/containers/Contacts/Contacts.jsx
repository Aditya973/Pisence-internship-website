import React from 'react'
import './contacts.css';
import { FaInstagram } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { IoShareSocial } from "react-icons/io5";
import { useInView } from 'react-intersection-observer';

const getIconByName = (name) => {
  switch (name) {
    case 'Phone':
      return <FaPhoneAlt />
    case 'Mail':
      return <IoMail />
    case 'Stay In Touch':
      return <IoShareSocial />
  }
}

const contactData = [
  {
    title: 'Phone',
    text: '+91 90805 75392'
  },
  {
    title: 'Mail',
    text: 'info.pisence@gmail.com'
  },
  {
    title: 'Stay In Touch',
    text: <FaInstagram style={{cursor: "pointer"}}/>
  },
]

const Contact = ({ title, text, contentVisible }) => (
  <div className={`pisence__contacts-container__contact ${contentVisible ? 'scale-up-center' : ''}`}>
    <div className="pisence__contacts-container__contact-icon">
      {getIconByName(title)}
    </div>
    <div className='pisence__contacts-container__contact-title'>
      <p>{title}</p>
    </div>
    <div className='pisence__contacts-container__contact-text'>
      <span>{text}</span>
    </div>
  </div>
)

const Contacts = () => {
  const { ref: contentRef, inView: contentVisible } = useInView();
  return (
    <div className='pisence__contacts section__padding section__margin' id='contact' ref={contentRef}>
      <div className="pisence__contacts-heading">
        <h1 className='gradient__text'>Get in Touch with Pisence</h1>
      </div>
      <div className="pisence__contacts-content">
        <p>Thank you for your interest in PiSence, your trusted partner in IoT monitoring services. We are excited to hear from you and discuss how our solutions can help your business thrive in the digital age. Whether you have questions, require further information, or want to explore a potential partnership, our dedicated team is ready to assist you.</p>
      </div>
      <div className="pisence__contacts-container">
        {contactData.map((item, index) => (
          <Contact title={item.title} text={item.text} contentVisible={contentVisible}/>
        ))}
      </div>
    </div>
  )
}

export default Contacts