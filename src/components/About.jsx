import React from 'react'
import Tilt from 'react-parallax-tilt'
import {motion} from 'framer-motion'

import {styles} from '../styles'
import {services} from '../constants'
import {fadeIn, textVariant} from '../utils/motion'
import {SectionWrap} from '../hoc'

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
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
        className='bg-stone-950 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {/* {title} */}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
    
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}
        >Introduction</p>
        <h2 className={styles.sectionHeadText}
        >Why Choose Us</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 font-medium text-white text-[17px] max-w-5xl leading-[30px]'
      >
        <div className=' relative '>
        <div className=' absolute inset-0 py-5 px-12 min-h-[100px]  flex-col  bg-stone-950 opacity-70 rounded-[20px]'/>
          <div className='text-white px-6  py-4 relative z-10'>
       At Ankh Cybernetic, we prioritize your security and success. Our experienced team delivers tailored IT and cloud security solutions, focusing on proactive risk management and compliance. With a commitment to excellence.

        we offer comprehensive support from incident response to virtual services. Partnering with us means gaining a trusted ally dedicated to safeguarding your assets and optimizing operations. Choose us for expertise, reliability, and a forward-thinking approach to security your peace of mind is our mission.
        </div>
        
      </div>
      </motion.p>

      <div className='mt-16 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrap(About, "about")