import React from 'react'
import Court from '../assets/court.svg'
import AI from '../assets/ai.svg'
import Lawyer from '../assets/lawyer.svg'
import { Heading } from '../components'

const Features = () => {
  return (
    <section className="max-w-5xl mx-auto flex flex-col py-16 gap-16">
        <Heading 
            topic={'Features of Legal Padi'}
            subtopic={'CaseSimpli Legal Padi tailored approaches designed specifically for your needs.'}
        />
        <div className='flex flex-col w-full md:px-12 px-4 gap-16'>
            <div className="flex flex-col md:flex-row justify-center items-center gap-16 md:gap-8">
                <div className="flex flex-col md:w-1/2 gap-6 order-2 md:order-1">
                    <div className="text-black text-xl md:text-3xl text-center md:text-left font-bold font-lato leading-9">
                        Law Made Easy
                    </div>
                    <div className="text-black text-sm md:text-base font-light text-center md:text-left font-inter leading-relaxed">
                        Empower youself with our extensive library of clear and concise Legal information, focused on Issues affecting individuals.
                    </div>
                </div>
                <div className="flex md:w-1/2 w-full justify-center ">
                    <img className='w-48 md:w-64' src={Court} alt='court' />
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-16 md:gap-8">
                <div className="flex flex-col md:w-1/2 gap-6 order-2 md:order-1">
                    <div className="text-black text-xl md:text-3xl text-center md:text-left font-bold font-lato leading-9">
                        D'Law AI from CaseSimpli Legal Padi
                    </div>
                    <div className="text-black text-base font-light font-inter text-center md:text-left leading-normal">
                        Chat with an AI powered tool offering personalized legal consultations and additional services suct and legal drafting, document summarization, etc.
                    </div>
                </div>
                <div className="flex md:w-1/2 w-full justify-center md:order-1">
                    <img className='w-44 md:w-64' src={AI} alt='ai' />
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-16 md:gap-8">
                <div className="flex flex-col md:w-1/2 gap-6 order-2 md:order-1">
                    <div className="text-black text-xl md:text-3xl text-center md:text-left font-bold font-lato leading-9">
                        Talk to a Real Lawyer
                    </div>
                    <div className="text-black text-base font-light font-inter text-center md:text-left leading-normal">
                        Link with a seasoned lawyer and leverage their specialized knowledge and practical expertise.
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