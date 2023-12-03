import React, { useState } from 'react';
import './feature.css';
import { SlBriefcase } from 'react-icons/sl'
import { BsCreditCard } from "react-icons/bs";
import { MdOutlineSavings } from "react-icons/md";
import { VscGraphLine } from "react-icons/vsc";

const getIconFromName = (name) => {
  switch (name) {
    case 'Comprehensive Solutions' :
      return <SlBriefcase/>
    
    case 'Professional Expertise' :
      return <BsCreditCard/>
    
    case 'Efficiency and Savings' :
      return <MdOutlineSavings/>
    
    case 'Business Expansion' :
      return <VscGraphLine/>
  }
}

const Feature = ({title, text}) => {
  const icon = getIconFromName(title); 
  const [toggle, setToggle] = useState(false);

  return (
    <div className='pisence__about-container__feature border-gradient border-gradient-purple flip-in-ver-right' onMouseEnter={()=>setToggle(true)} onMouseLeave={() => setToggle(false)}>
      {
        toggle
         ? (<div className="pisence__about-container__feature-text flip-in-ver-right">
              <p>{text}</p>
            </div>)
         : <>
          <div className="pisence__about-container__feature-icon">
        <span>{icon}</span>
      </div>
      <div className="pisence__about-container__feature-heading">
        <h3 className='gradient__text'>{title}</h3>
      </div>
         </>
      }
    </div>
  )
}

export default Feature