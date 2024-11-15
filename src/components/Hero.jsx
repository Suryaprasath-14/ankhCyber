import React, {useState, useEffect} from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import {styles} from '../styles'
import {ComputersCanvas} from './canvas'
import Adobe from '../assets/Adobe.jpeg'
import Adobe1 from '../assets/Adobe1.jpeg'
import istock from '../assets/istock.jpg'
import {fadeIn, textVariant} from '../utils/motion'


const Hero = () => {

  const images = [
    {src:Adobe1, title: 'Ankh Cybernetic Technologies Pvt Ltd', subtitle: 'Innovative VAPT Solutions for Cloud Security and AI-Driven Penetration Testing'}, // Your first image
    {src : Adobe, title: 'Next-Generation Cybersecurity for the Modern Enterprise', subtitle: 'Ankh Cybernetic offers tailored Vulnerability Assessment and Penetration Testing (VAPT) services focused on securing cloud environments and leveraging AI-driven insights. Our solutions empower businesses to stay ahead of evolving threats, ensuring compliance, protecting assets, and enhancing resilience.'}, // Your second image
    {src: Adobe1, title: 'Welcome Ankh', subtitle: 'Cybernetic Innovations'}, // Your third image
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [animating, setAnimating] = useState(false); // Control animation state (to prevent overlapping animations)
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [direction, setDirection] = useState('next'); // Track direction (next or previous)
  const [textVisible, setTextVisible] = useState(true); // Track text visibility


  useEffect(() => {
    // After the first render, disable the "first render" flag
   if(isFirstRender){
    setIsFirstRender(false);
   }
  }, []);

  // Manually navigate to the previous or next image
  const goToPrevious = () => {
    if (animating) return;
    setAnimating(true);
    setDirection('previous');
    

    // Transition Logic: After 500ms (fade out text duration), update the image
    setTimeout(() => {
      setTextVisible(false); // Hide text before image transition
      setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    }, 0); // Wait for text fade-out animation

    // Show text again after image has transitioned
    setTimeout(() => {
      setTextVisible(true); // Fade in new text after image transition
      setAnimating(false); // Allow the next click after the animation is finished
    }, 1000); // Wait for image transition duration
  };

  const goToNext = () => {
    if (animating) return;
    setAnimating(true);
    setDirection('next');
     // Hide text before image transition

    // Transition Logic: After 500ms (fade out text duration), update the image
    setTimeout(() => {
      setTextVisible(false);
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 0); // Wait for text fade-out animation

    // Show text again after image has transitioned
    setTimeout(() => {
       setTextVisible(true); // Fade in new text after image transition
      setAnimating(false); // Allow the next click after the animation is finished
    }, 1000); // Wait for image transition duration
  };




  const { src, title, subtitle } = images[currentImageIndex];

  return (
    <section className='relative
    w-full h-screen mx-auto '>
      {/* <div className='absolute inset-0 bg-black bg-opacity-65' />
      <div className={`${styles.paddingX} absolute
      inset-0 top-[120px] w-full mx-auto flex
      flex-row items-start gap-5`}>
         <div className='flex flex-col justify-center 
         items-center mt-5 '>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
         </div>

         <div className='relative'>
          <h1 className={`${styles.heroHeadText}
          text-white`}>Ankh <span className='mix-blend-plus-darker relative text-[#3054ca] '>Cybernetic</span></h1>
          <p className={`${styles.heroSubText} mt-2
          text-white-100`}>
             Intelligent Cyber Tech
          </p>
         </div>

      </div> */}
   <div className="absolute inset-0 bg-black bg-opacity-80 justify-center flex"/>
  {/*<div className='relative top-72'>
          <h1 className={`${styles.heroHeadText}
          text-white`}>Ankh <span className='mix-blend-plus-darker relative text-[#3054ca] '>Cybernetic</span></h1>
          
         </div>

    </div>  */}

{/* Hero Content */}
{/* <motion.div variants={textVariant()}>
<div
  className={`${styles.paddingX} absolute inset-0 top-[120px] z-10 w-full mx-auto flex flex-row items-start gap-5`}
>
  <div className="flex flex-col justify-center items-center mt-5">
    <div className="w-5 h-5 rounded-full bg-[#915eff]" />
    <div className="w-1 sm:h-80 h-40 violet-gradient" />
  </div>

  <div className="relative">
    <h1 className={`${styles.heroHeadText} text-white`}>{title}</h1>
    <p className={`${styles.heroSubText} mt-2 text-white-100`}>{subtitle}</p>
  </div>
</div>
</motion.div> */}

      
        {/* Carousel Image Slider */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden">
        <AnimatePresence>
          {/* Image Transition */}
          <motion.div
            key={`image-${currentImageIndex}-${direction}`}
            className="w-full h-full absolute"
            style={{
              backgroundImage: `url(${src})`,
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            initial={{
              opacity: isFirstRender ? 1 : 0,
              x: isFirstRender? 0 : (direction === 'next' ? '100%' : '-100%'),
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: direction === 'next' ? '-100%' : '100%',
            }}
            transition={{
              duration: 0.75,
              ease: 'easeInOut',
            }}
          />

          {/* Text Transition (with opacity fade-out/fade-in) */}
          {textVisible && (
            <motion.div
              key={`text-${currentImageIndex}-${direction}`} 
              className="absolute z-10 top-1/3 right-1/2 transform -translate-x-1/2 text-start text-white"
              initial={{
                opacity: isFirstRender ? 1 : 0, // Text starts invisible
                y: direction === 'next' ? 20 : -20, // Direction of text entrance
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0, // Fade out text
                y: direction === 'next' ? -20 : 20, // Direction of text exit
              }}
              transition={{
                duration: 0.75, // Fade duration
                ease: 'easeInOut',
              }}
            >
              
              {/* <h1 className={`${styles.heroHeadText} text-white`}>{title}</h1>
              <p className={`${styles.heroSubText} mt-2 text-white-100`}>{subtitle}</p>
              */}


      <div className={`${styles.paddingX} relative
      inset-0 top-[100px] w-full mx-4 flex
      flex-row items-start gap-5 sm:-mt-48 sm:ml-24`}>
         <div className='flex flex-col justify-center 
         items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
         </div>

         <div className='relative'>
          {/* <h1 className={`${styles.heroHeadText}
          text-white`}>Ankh <span className='mix-blend-plus-darker relative text-[#3054ca] '>Cybernetic</span></h1>
          <p className={`${styles.heroSubText} mt-2
          text-white-100`}>
             Intelligent Cyber Tech
          </p> */}
          <h1 className={`${styles.heroHeadText} text-white`}>{title}</h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>{subtitle}</p>
         </div>

      </div> 
            </motion.div>
          )}

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-60" />
        </AnimatePresence>
      </div>

     
      {/* Navigation Buttons */}
      <div className="absolute inset-y-1/2 left-5 z-10">
        <button
          onClick={goToPrevious}
          className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition-all"
        >
          &#10094; {/* Left arrow symbol */}
        </button>
      </div>
      <div className="absolute inset-y-1/2 right-5 z-10">
        <button
          onClick={goToNext}
          className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition-all"
        >
          &#10095; {/* Right arrow symbol */}
        </button>
      </div>

      {/* <ComputersCanvas/> */}
      <div className='absolute z-10 xs:bottom-20 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[25px] h-[35px] rounded-3xl border-4 border-secondary flex justify-center items-start p-1'>
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-2 h-2 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero