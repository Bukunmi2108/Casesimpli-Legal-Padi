import React from 'react'
import { Navbar, Footer, Logo, Btn, Hero, Features, Benefits, FAQ } from '../components'
import Profile from '../assets/profile.png'
import Layer from '../assets/layer.svg'

const Homepage = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Features />
        <Benefits />
        <FAQ />




        <section className="flex flex-col justify-center items-center gap-12 my-24">
            <div className="flex-col justify-start items-center gap-6 flex">
                <div className="text-black text-4xl md:text-5xl font-bold font-lato leading-10">
                    Testimonials
                </div>
                <div className="text-center text-primary-text text-md md:text-lg font-normal font-inter leading-normal">Read reviews about Legal Padi</div>
            </div>
        </section> 

        <Footer />
    </div>
  )
}

export default Homepage