import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'
import { motion } from "motion/react"
const Services = () => {
  const serviceData = [

    {
      title: 'Advertising',
      description: 'We turn bold ideas into powerful digital solutions that connect engage...',
      icon: assets.ads_icon
    },

    {
      title: 'Content Marketing',
      description: 'We help you execute your plan and deliver results.',
      icon: assets.marketing_icon
    },
    {
      title: 'Content Writing',
      description: 'we help you to create a marketing strategy that drives results.',
      icon: assets.content_icon
    },
    {
      title: 'Social Media',
      description: 'We help you build a strong social media presence and engage with your audience',
      icon: assets.social_icon
    },
  ]
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.2}}
      viewport={{ once: true }}
      id='services' className='relative flex flex-col items-center gap-7 px-4 sm:px-12
     lg:px-24 xl:px-40 pt-30 text-gray-700 drak:text-white'>

      <img src={assets.bgImage2} alt="" className='absolute -top-110 -left-70 -z-1 drak:hidden' />
      <Title title='How can we help you?' desc='From strategy to execution
      , we craft digital solution that move your business'/>
      <div className='flex flex-col grid grid-cols-1 md:grid-cols-2'>
        {serviceData.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </motion.div>
  )
}

export default Services
