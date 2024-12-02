import React from 'react'
import community from '../assets/slider1.jpg'
import Btn from './Btn'
import { MdOutlineContactSupport } from 'react-icons/md'


const Contact = () => {
  return (
    <section className='bg-blue-50'>
    <div className='mx-auto max-w-7xl xs:px-4 sm:px-4 flex flex-col w-full justify-center items-center py-16 gap-16'>
        <div className= "flex xs:flex-col sm:flex-row xs:gap-12 sm:gap-8">
            <img className='xs:w-full sm:w-1/2' src={community} />
            <div className='flex flex-col gap-12'>
                <h3 className='text-black xs:text-3xl sm:text-4xl md:text-5xl font-bold font-lato text-left'>
                    Revolutionize your legal experience; Connect with our team
                </h3>
                <div className='flex flex-row p-4 bg-primary-blue w-fit rounded gap-2'>
                    <MdOutlineContactSupport className='w-6 h-6 text-white' />
                    <span className='font-inter text-xl font-medium text-white'>
                        Contact us
                    </span>
                </div>
            </div>
        </div>
    </div>
    </section>
  )
}

export default Contact