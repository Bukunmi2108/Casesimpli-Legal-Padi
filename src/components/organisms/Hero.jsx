import React from 'react'
import Herovideo from '../../assets/png/hero-video.png'
import { Button } from '..'
import { IoIosLogIn } from "react-icons/io";


const Hero = () => {
  return (
    <div className='mx-auto max-w-7xl xs:px-4 sm:px-4'>
        <div className=" w-full mx-auto flex flex-col py-16 items-center justify-center gap-4 md:gap-8">
            <h1 className="text-center text-black text-6xl md:text-8xl leading-[60px] md:leading-[80px] font-bold font-lato md:w-5/6">
            Your Legal Padi, Anytime, Anywhere
            </h1>
            <div className="text-center text-primary-text text-lg md:text-xl font-medium font-inter max-w-2xl ">Seamless access to legal information and education, solved complexities associated with engaging legal services.</div>
            <Button text='Get started for free' link={'/signup'} type='primary'  size='large' icon={<IoIosLogIn />} />
        </div>
    </div>
)
}

export default Hero