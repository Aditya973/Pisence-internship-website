import React, { useState } from 'react'
import './accordion.css'

const Accordion = ({ title, text, indx, open, setOpen, contentVisible}) => {
  return (
    <div className={`pisence__accordion ${contentVisible ? 'fade-in' : ''}`}>
      <div className="pisence__accordion-title">
        <div />
        <h1 onClick={()=>setOpen(indx)}>{title}</h1>
      </div>
      {(indx === open) && 
        <div className="pisence__accordion-text scale-up-center">
          <p>{text}</p>
        </div>
      }
    </div>
  )
}

export default Accordion