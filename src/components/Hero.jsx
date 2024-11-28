import React from 'react'
import Herovideo from '../assets/hero-video.png'
import { Btn } from '../components'


const Hero = () => {
  return (
    <div className='bg mx-auto max-w-7xl md:bg-center bg-bottom bg-no-repeat pb-16 xs:px-4 sm:px-4'>
        <div className=" w-full mx-auto flex flex-col py-24 items-center justify-center gap-4">
            <div className="text-center text-black text-6xl md:text-8xl leading-[60px] md:leading-[80px] font-bold font-lato md:w-5/6">Your Legal Padi, Anytime, Anywhere</div>
            <div className="text-center text-primary-text text-lg md:text-xl font-medium font-inter">Get expert legal advice and information at your fingertips</div>
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