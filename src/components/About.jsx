import React from 'react'
import Tilt from 'react-parallax-tilt'
import {motion} from 'framer-motion'

import {styles} from '../styles'
import {choices, services} from '../constants'
import {fadeIn, textVariant} from '../utils/motion'
import {SectionWrap} from '../hoc'

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='lg:w-[280px] xl:w-[300px] md:w-[550px] xs:w-[450px] w-[200px]'>
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
        className='bg-stone-950 rounded-[20px] py-5 px-12 min-h-[20px]  flex justify-evenly items-center flex-col flex-wrap'
      >
        {/* <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        /> */}

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
    
      <motion.div variants={textVariant()}>
        {/* <p className={styles.sectionSubText}
        >Introduction</p> */}
        <h2 className={styles.sectionHeadText}
        >Why Choose Us</h2>
      </motion.div>

      <div className='w-full flex xl:gap-36 gap-20 flex-wrap relative'>
      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 font-medium text-white text-[17px] max-w-2xl lg:w-[580px] md:w-[670px] leading-[30px]'
      >
        <div className=' relative '>
        <div className=' absolute inset-0 py-5 px-12 min-h-[100px]  flex-col  bg-stone-950 opacity-70 rounded-[20px]'/>
          <div className='text-white px-6  py-4 relative z-10'>
          Ankh Cybernetic specializes in **cloud security**, offering advanced **cloud VAPT services** for multi-cloud and hybrid environments. Our **AI-driven penetration testing** uses sophisticated algorithms to uncover deeper vulnerabilities, while **behavioral threat detection** helps identify anomalies and insider threats. We provide **real-time threat monitoring** to ensure continuous protection of your sensitive data. Our solutions are designed to be **compliance-ready**, with reports aligned to **OWASP** and **ISO/IEC** standards, offering both detailed technical insights and executive summaries. With **end-to-end support**, we ensure seamless integration of cybersecurity solutions without disrupting operations.
        </div>
        
      </div>
      </motion.div>
      <motion.div
      className='mt-0 font-medium text-white text-[17px] max-w-full w-full lg:w-[28%] xl:w-[32%] md:w-[70%]'
      >
        <div className='flex flex-col flex-wrap justify-evenly items-center gap-10 min-h-[110px] h-full w-full'>
        {choices.map((choice, index) => (
          <ServiceCard key={choice.title} index={index} {...choice} />
        ))}
      </div>
      </motion.div>
      </div>

      {/* <div className='mt-16 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}
    </>
  )
}

export default SectionWrap(About, "about")