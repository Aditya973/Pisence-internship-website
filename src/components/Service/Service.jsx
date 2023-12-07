import React from 'react';
import './service.css';
import iotService from '../../assets/iot_service.png'
import schoolService from '../../assets/school_service.png'
import analyticalService from '../../assets/analytical_service.png'
import { useInView } from 'react-intersection-observer';

const getImageFromName = (name) => {
  switch(name) {
    case 'IoT Monitoring Service':
      return iotService;
    
    case 'School Monitoring Service':
      return schoolService;
    
    case 'Analytical Monitoring':
      return analyticalService;
  }
}

const Service = ({ title, text}) => {
  const image = getImageFromName(title);
  const { ref: contentRef, inView: contentVisible } = useInView();
  return (
    <div className="pisence__services-container__service" ref={contentRef}>
      <div className={`pisence__services-container__service-content ${contentVisible ? 'fade-in-left' : ''}`}>
        <div className="pisence__services-container__service-content__heading">
          <h3>{title}</h3>
        </div>
        <div className="pisence__services-container__service-content__text">
          <p>{text}</p>
        </div>
      </div>
      <div className={`pisence__services-container__service-image ${contentVisible ? 'fade-in-right' : ''}`}>
        <img src={image} alt="serviceImage" />
      </div>
    </div>
  )
}

export default Service