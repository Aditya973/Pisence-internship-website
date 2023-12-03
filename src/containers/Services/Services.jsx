import React from 'react';
import './services.css';
import iotService from '../../assets/iot_service.png'
import schoolService from '../../assets/school_service.png'
import analyticalService from '../../assets/analytical_service.png'
import { Service } from '../../components'

const serviceData = [
  {
    title: 'IoT Monitoring Service',
    text: 'At PiSence, we offer a robust suite of IoT monitoring services designed to cater to the unique needs of your business. Our team of skilled professionals is dedicated to delivering real-time visibility and control over your interconnected devices and systems. By leveraging advanced technologies and industry best practices, we ensure that your operations run seamlessly while you focus on what matters most – growing your business.'
  },
  {
    title: 'School Monitoring Service',
    text: 'A school management system is a vital tool in modern education, streamlining administrative tasks and enhancing efficiency. It encompasses various functions, including student enrollment, attendance tracking, grade management, and communication between teachers, students, and parents. With features like online portals and automated processes, it simplifies daily operations, ensuring a smoother educational experience for all stakeholders while promoting transparency and data accuracy.'
  },
  {
    title: 'Analytical Monitoring',
    text: "Harnessing the power of data is crucial in making informed business decisions. With PiSence's analytical monitoring solutions, you gain valuable insights into your IoT ecosystem. Our state-of-the-art tools and methodologies enable you to collect, analyze, and interpret data from your connected devices in real-time. By identifying trends, patterns, and anomalies, we help you optimize performance, identify areas for improvement, and make data-driven decisions that drive growth."
  },
]

const Services = () => {
  return (
    <div className='pisence__services section__padding' id='services'>
      <div className="pisence__services-heading">
        <h1 className='gradient__text'>Our Services</h1>
      </div>
      <div className="pisence__services-container">
        {serviceData.map((item,index) => (
          <Service title={item.title} text={item.text} key={index} />
        ))}
      </div>
    </div>
  )
}

export default Services