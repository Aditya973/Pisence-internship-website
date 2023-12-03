import React from 'react';
import './service.css';
import iotService from '../../assets/iot_service.png'
import schoolService from '../../assets/school_service.png'
import analyticalService from '../../assets/analytical_service.png'

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
  return (
    <div className="pisence__services-container__service">
      <div className="pisence__services-container__service-content">
        <div className="pisence__services-container__service-content__heading">
          <h3>{title}</h3>
        </div>
        <div className="pisence__services-container__service-content__text">
          <p>{text}</p>
        </div>
      </div>
      <div className="pisence__services-container__service-image">
        <img src={image} alt="serviceImage" />
      </div>
    </div>
  )
}

export default Service