import {BrowserRouter} from 'react-router-dom'
import {Contact, About, Experience, Feedbacks, Hero,
        Navbar, Tech, Works, StarsCanvas} from './components'
import BgVideo from './components/BgVideo'

const App = () => {
  
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern1 sm:mt-16 -mt-0 bg-cover shadow-slate-950 bg-blend-lighten  bg-no-repeat bg-center  '>
          <BgVideo/>
          <Navbar/>
          <Hero className='inset-0 bg-gradient-to-b from-transparent to-black opacity-0 hover:opacity-100 transition-opacity duration-500'/>
        </div>
        <About/>
        <Experience/>
        <Tech/>
        <Works/>
        <Feedbacks/>
        <div className='relative z-0'>
         <Contact/>
         <StarsCanvas/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App