import React from 'react'
import './contacts.css';

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
    title: 'Phone',
    text: 'hi'
  },
]

const Contacts = () => {
  return (
    <div className='pisence__contacts section__padding section__margin'>
      <div className="pisence__contacts-heading">
        <h1 className='gradient__text'>Get in Touch with Pisence</h1>
      </div>
      <div className="pisence__contacts-content">
        <p>Thank you for your interest in PiSence, your trusted partner in IoT monitoring services. We are excited to hear from you and discuss how our solutions can help your business thrive in the digital age. Whether you have questions, require further information, or want to explore a potential partnership, our dedicated team is ready to assist you.</p>
      </div>
      
    </div>
  )
}

export default Contacts