import React from 'react'
import Tilt from 'react-parallax-tilt'
import {motion} from 'framer-motion'

import {styles} from '../styles'
import {services, serviceList} from '../constants'
import {fadeIn, textVariant} from '../utils/motion'
import {SectionWrap} from '../hoc'

const ServiceCard = ({ index, title, icon, lists }) => (
  <Tilt className='xs:w-[258px] w-full '>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 1.00)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-stone-950 rounded-[20px] py-5 px-12 min-h-[380px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
        
        <ul className='mt-5 list-disc ml-5 space-y-2'>
        {lists.map((list, index) => (
          <li
            key={`list-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {list}
          </li>
        ))}
      </ul>

      </div>
    </motion.div>
  </Tilt>
);

const Services = () => {
  return (
    <>
    
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}
        >Introduction</p>
        <h2 className={styles.sectionHeadText}
        >Services</h2>
      </motion.div>

      

      <div className='mt-16 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrap(Services, "work")