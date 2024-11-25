import React from 'react'
import Herovideo from '../assets/hero-video.png'
import { Btn } from '../components'


const Hero = () => {
  return (
    <div className='bg md:bg-center bg-bottom bg-no-repeat'>
        <div className=" w-full mx-auto flex flex-col py-24 items-center justify-center gap-4">
            <div className="text-center text-black xs:text-4xl sm:text-6xl md:text-8xl leading-[60px] md:leading-[80px] font-bold font-lato md:w-5/6">Lorem ipsum dolor sit amet, consectetur</div>
            <div className="text-center text-primary-text xs:text-sm sm:text-lg md:text-xl font-medium font-inter">Lorem ipsum dolor sit amet, consectetur</div>
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