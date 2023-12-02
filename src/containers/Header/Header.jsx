import React from 'react';
import './header.css';
import monitoring from '../../assets/iot.png';
import { TypeAnimation } from 'react-type-animation';

const sequence = [
  'End-to-End IoT Monitoring', 5000, 'We Provide you with Valuabe Insights', 5000
]

const sequence2 = [
  'for Real-Time Visibility and Control', 5000, 'that Empower Informed decision-making', 5000
]

const Header = () => {
  return (
    <div className='pisence__header section__padding' id='home'>
      <div className="pisence__header-content">
        <TypeAnimation 
          sequence={sequence}
          speed={50}
          wrapper='h1'
          repeat={Infinity}
        />
        <TypeAnimation 
          sequence={sequence2}
          speed={72}
          wrapper='p'
          repeat={Infinity}
        />
        <div className="pisence__header-content__btn">
          <button type='button' className='scale-up-center'>Our Services</button>
        </div>
      </div>
      <div className="pisence__header-image">
        <img src={monitoring} alt="monitoring" />
      </div>
    </div>
  )
}

export default Header