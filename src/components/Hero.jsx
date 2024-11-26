import React from 'react'
import Herovideo from '../assets/hero-video.png'
import { Btn } from '../components'


const Hero = () => {
  return (
    <div className='bg md:bg-center bg-bottom bg-no-repeat py-16 pt-24'>
        <div className="max-w-7xl px-4 mx-auto flex flex-col pb-24 items-center justify-center gap-4">
            <div className="w-full text-center text-black xs:text-4xl sm:text-6xl md:text-8xl leading-[60px] md:leading-[80px] font-bold font-lato md:w-5/6">Your Legal Padi, Anytime, Anywhere</div>
            <div className="text-center text-primary-text xs:text-sm sm:text-lg md:text-xl xs:font-normal sm:font-medium font-inter md:mt-4">Get expert legal advice and information at your fingertips.</div>
            <Btn 
            text='Get started for free'
            classes='bg-primary-orange text-white'
            />
        </div>


        <div className="mx-auto max-w-6xl object-cover">
            <img className='w-full' src={Herovideo} alt="Video" />
        </div>
    </div>
)
}

export default Hero