import React from 'react'
import './about.css'
import { Feature } from '../../components'
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';
import CreditScoreOutlinedIcon from '@mui/icons-material/CreditScoreOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';

const featuresData = [
  {
    title: 'Comprehensive Solutions',
    text: 'we signify our commitment to providing comprehensive solutions tailored to your needs',
    icon: BusinessCenterOutlinedIcon
  },
  {
    title: 'Professional Expertise',
    text: 'Our team of skilled professionals is equipped with the knowledge and experience to deliver top-notch services',
    icon: CreditScoreOutlinedIcon
  },
  {
    title: 'Efficiency and Savings',
    text: 'We understand the importance of optimizing resources and ensuring a solid return on investment',
    icon: SavingsOutlinedIcon
  },
  {
    title: 'Business Expansion',
    text: 'Leverage the power of analytics to identify growth opportunities and stay ahead in your industry.',
    icon: QueryStatsOutlinedIcon
  },
]

const About = () => {
  return (
    <div className='pisence__about section__padding'>
      <div className="pisence__about-heading">
        <h1 className='gradient__text'>About Us</h1>
      </div>
      <div className="pisence__about-content">
        <div className="pisence__about-content__text">
          <p>
          At PiSence, we are dedicated to delivering top-quality monitoring services to meet the diverse needs of industries and sectors across the globe. With our advanced technology, expertise, and commitment to excellence, we aim to be your trusted partner in ensuring safety, security, and efficiency. Our company, PiSence, is built on a foundation of innovation, reliability, and customer satisfaction. We understand the critical importance of monitoring systems in today's fast-paced world, where safety and security are paramount. Whether it's protecting assets, ensuring compliance with regulations, or optimizing operational efficiency, we have you covered. What sets PiSence apart is our comprehensive range of monitoring services. We offer a wide spectrum of solutions tailored to various industries, including security monitoring, environmental monitoring, infrastructure monitoring, industrial process monitoring, IT infrastructure monitoring, healthcare monitoring, energy management monitoring, and vehicle and fleet monitoring. Whatever your monitoring needs may be, we have the expertise and technology to provide effective and customized solutions.
          </p>
        </div>
        <div className="pisence__about-content__container">
          {featuresData.map((item,index) => (
            <Feature title = {item.title} text = {item.text} key={item.title+index} icon={item.icon}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About