import React from 'react'
import Court from '../assets/court.svg'
import AI from '../assets/ai.svg'
import Lawyer from '../assets/lawyer.svg'
import { Heading } from '../components'

const Features = () => {
  return (
    <section className="max-w-7xl mx-auto flex flex-col py-16 gap-16">
        <Heading 
            topic={'Features of Legal Padi'}
            subtopic={'Explore the exceptional features Legal Padi has for you'}
        />
        <div className='flex flex-col w-full md:px-12 px-4 gap-16'>
            <div className="flex flex-col md:flex-row justify-center items-center gap-16 md:gap-8">
                <div className="flex flex-col md:w-1/2 gap-6 order-2 md:order-1">
                    <div className="text-black text-xl md:text-3xl text-center md:text-left font-bold font-lato leading-9">
                        Legal Padi Legal Research Directory
                    </div>
                    <div className="text-black text-sm md:text-base font-light text-center md:text-left font-inter leading-relaxed">
                        Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur
                    </div>
                </div>
                <div className="flex md:w-1/2 w-full justify-center ">
                    <img className='w-48 md:w-64' src={Court} alt='court' />
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-16 md:gap-8">
                <div className="flex flex-col md:w-1/2 gap-6 order-2 md:order-1">
                    <div className="text-black text-xl md:text-3xl text-center md:text-left font-bold font-lato leading-9">
                        Legal Padi Legal Research Directory
                    </div>
                    <div className="text-black text-base font-light font-inter text-center md:text-left leading-normal">
                        Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur
                    </div>
                </div>
                <div className="flex md:w-1/2 w-full justify-center md:order-1">
                    <img className='w-44 md:w-64' src={AI} alt='ai' />
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-16 md:gap-8">
                <div className="flex flex-col md:w-1/2 gap-6 order-2 md:order-1">
                    <div className="text-black text-xl md:text-3xl text-center md:text-left font-bold font-lato leading-9">
                        Legal Padi Legal Research Directory
                    </div>
                    <div className="text-black text-base font-light font-inter text-center md:text-left leading-normal">
                        Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur
                    </div>
                </div>
                <div className="flex md:w-1/2 w-full justify-center">
                    <img className='w-48 md:w-64' src={Lawyer} alt='Lawyer' />
                </div>
            </div>
        </div>
    </section>  
)
}

export default Features