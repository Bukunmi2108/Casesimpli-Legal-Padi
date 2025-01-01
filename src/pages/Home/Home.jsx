import React from 'react'
import { Navbar, Footer, Hero, Features, Benefits, FAQ, HeroVideo, Slider, Contact, Newsletter } from '../../components'

const Home = () => {
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

export default Home