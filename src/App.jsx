import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/hero'
import Trustedby from './components/Trustedby'
import Services from './components/services'
import OurWork from './components/OurWork'
import Teams from './components/Teams'
import ContactUs from './components/ContactUs'
import {Toaster} from 'react-hot-toast'
import Footer from './components/Footer'
const App = () => {

    const[theme , setTheme]=useState(localStorage.getItem('theme') ? localStorage.getItem('theme') :'light')
  return (
    <div className='dark:bg-black relative'>

        <Toaster/>
        <Navbar theme={theme} setTheme={setTheme}/>
        <Hero/>
        <Trustedby/>
        <Services />
        <OurWork/>
        <Teams />
        <ContactUs/>
        <Footer theme={theme}/>
      
    </div>
  )
}

export default App
