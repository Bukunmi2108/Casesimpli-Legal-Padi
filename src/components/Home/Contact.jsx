import React from 'react'
import community from '../../assets/team.jpg'
import { Heading } from "../../components"
import { MdOutlineContactSupport, MdOutlineEmail } from 'react-icons/md'
import { FaLinkedin, FaXTwitter } from 'react-icons/fa6'
import { BsTelephone } from 'react-icons/bs'


const Contact = () => {
    const icons = [
        {
            svg: <FaXTwitter className='w-6 h-6 cursor-pointer hover:w-8 hover:h-8 transition-all ease-in-out' />,
            link: ''
        },
        {
            svg: <FaLinkedin className='w-6 h-6 cursor-pointer hover:w-8 hover:h-8 transition-all ease-in-out' />,
            link: ''
        },
        {
            svg: <MdOutlineEmail className='w-6 h-6 cursor-pointer hover:w-8 hover:h-8 transition-all ease-in-out' />,
            link: ''
        },
        {
            svg: <BsTelephone className='w-6 h-6 cursor-pointer hover:w-8 hover:h-8 transition-all ease-in-out' />,
            link: ''
        },
    ]
  return (
    <section className='bg-blue-50'>
    <div className='mx-auto max-w-7xl xs:px-4 sm:px-4 flex flex-col w-full justify-center items-center py-16 gap-16'>
        <Heading 
            topic={'Contact us'}
            subtopic={'Get in touch with us'}
        />
        <div className= "flex xs:flex-col sm:flex-row xs:gap-12 sm:gap-8">
            <img className='xs:w-full sm:w-1/2 object-cover' src={community} />
            <div className='flex flex-col gap-12'>
                <h3 className='text-black xs:text-2xl sm:text-3xl md:text-4xl font-bold font-lato text-left'>
                    Revolutionize your legal experience; Connect with our team
                </h3>
                <div className='flex flex-wrap gap-2 items-center justify-start'>
                    {
                        icons.map((icon, index) => {
                            return(
                                <a href={icon.link} key={index}>{icon.svg}</a>
                            )
                        })
                    }
                </div>
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