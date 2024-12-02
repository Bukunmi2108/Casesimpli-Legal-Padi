import React from 'react'
import { Navbar, Footer, Logo, Btn, Hero, Features, Benefits, FAQ, HeroVideo, Slider, Contact, Newsletter } from '../components'
import Profile from '../assets/profile.png'
import Layer from '../assets/layer.svg'

const Homepage = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Slider />
        <HeroVideo />
        <Features />
        <Benefits />
        <Contact />
        <Newsletter />
        <FAQ />

        <Footer />
    </div>
  )
}

export default Homepage