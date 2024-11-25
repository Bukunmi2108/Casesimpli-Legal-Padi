import React from 'react'
import Court from '../assets/court.svg'
import AI from '../assets/ai.svg'
import Lawyer from '../assets/lawyer.svg'

const Features = () => {
  return (
    <section className="max-w-7xl mx-auto flex flex-col py-24 gap-12">
        <div className="flex flex-col justify-start items-center gap-6">
            <div className="text-black text-4xl  md:text-5xl font-bold font-lato leading-10">Features of Legal Padi</div>
            <div className="text-center text-primary-text text-md md:taxt-lg font-normal font-inter leading-normal">Explore the exceptional features Legal Padi has for you</div>
        </div>

        <div className='flex flex-col w-full md:px-12 px-4 gap-16'>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                <div className="flex flex-col md:w-1/2 gap-6">
                    <div className="px-8 py-8 bg-gradient-to-b from-[#ebf5fb] to-white rounded-[100px] shadow flex-col flex justify-center items-center gap-2.5 w-fit">
                        <div className="text-[#00008b] text-5xl font-bold font-lato leading-9">1</div>
                    </div>

                    <div className="text-black text-3xl font-bold font-lato leading-9">Legal Padi Legal Research Directory</div>
                    <div className="text-black text-lg font-normal font-inter leading-normal">
                    Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur
                    </div>
                </div>
                <div className="flex md:w-1/2 w-full justify-center">
                    <img className='w-64' src={Court} alt='court' />
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                <div className="flex flex-col md:w-1/2 gap-6 md:order-2">
                    <div className="px-8 py-8 bg-gradient-to-b from-[#ebf5fb] to-white rounded-[100px] shadow flex-col flex justify-center items-center gap-2.5 w-fit">
                        <div className="text-[#00008b] text-5xl font-bold font-lato leading-9">1</div>
                    </div>

                    <div className="text-black text-3xl font-bold font-lato leading-9">Legal Padi Legal Research Directory</div>
                    <div className="text-black text-lg font-normal font-inter leading-normal">
                    Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur
                    </div>
                </div>
                <div className="flex md:w-1/2 w-full justify-center md:order-1">
                    <img className='w-64' src={AI} alt='ai' />
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                <div className="flex flex-col md:w-1/2 gap-6">
                    <div className="px-8 py-8 bg-gradient-to-b from-[#ebf5fb] to-white rounded-[100px] shadow flex-col flex justify-center items-center gap-2.5 w-fit">
                        <div className="text-[#00008b] text-5xl font-bold font-lato leading-9">1</div>
                    </div>

                    <div className="text-black text-3xl font-bold font-lato leading-9">Legal Padi Legal Research Directory</div>
                    <div className="text-black text-lg font-normal font-inter leading-normal">
                    Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur
                    </div>
                </div>
                <div className="flex md:w-1/2 w-full justify-center">
                    <img className='w-64' src={Lawyer} alt='ai' />
                </div>
            </div>
        </div>
    </section>  
)
}

export default Features