import React, { useState } from 'react';
import './whyChooseUs.css';
import wcuImage from '../../assets/monitoring.svg'
import { Accordion } from '../../components'
import { useInView } from 'react-intersection-observer';

const accordionData = [
  {
    title: 'Comprehensive Range of Services',
    text: "We stand out from the competition by offering a comprehensive range of monitoring services that cover all aspects of your business needs. Whether it's security monitoring, environmental monitoring, infrastructure monitoring, industrial process monitoring, IT infrastructure monitoring, healthcare monitoring, energy management monitoring, or vehicle and fleet monitoring, we have the expertise and technology to deliver tailored solutions. By providing a one-stop-shop for all your monitoring requirements, we save you the hassle of dealing with multiple vendors and ensure a seamless integration of monitoring systems."
  },
  {
    title: 'Cost-Effective Solutions',
    text: "We understand the importance of cost efficiency for businesses, which is why we pride ourselves on offering our services at a low cost compared to other companies in the market. We believe that top-quality monitoring services should be accessible and affordable for all organizations, regardless of their size or budget. By optimizing our operations, leveraging technology, and streamlining processes, we can deliver cost-effective solutions without compromising on the quality and reliability of our services."
  },
  {
    title: 'Swift issue Resolution',
    text: "We prioritize customer satisfaction and strive to provide exceptional service at all times. We have a dedicated team of skilled professionals who are committed to resolving any issues that may arise as quickly as possible. With our proactive monitoring and rapid response capabilities, we can identify and address potential issues before they escalate, minimizing downtime and ensuring the smooth operation of your systems. Our focus on prompt issue resolution means you can rely on us to keep your business running smoothly without unnecessary delays or disruptions."
  },
]

const WhyChooseUs = () => {
  const [open,setOpen] = useState(0);
  const { ref: contentRef, inView: contentVisible } = useInView();
  return (
    <div className='pisence__wcu section__padding'>
      <div className="pisence__wcu-heading">
        <h1 className='gradient__text'>Why Choose Us?</h1>
      </div>
      <div className="pisence__wcu-content" ref={contentRef}>
        <div className={`pisence__wcu-content__image ${contentVisible ? 'fade-in-left' : ''}`}>
          <img src={wcuImage} alt="wcuImage" />
        </div>
        <div className="pisence__wcu-content__container">
          {accordionData.map((item,index) => (
            <Accordion title={item.title} text={item.text} key={index} indx={index} open={open} setOpen={setOpen} contentVisible={contentVisible}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUs