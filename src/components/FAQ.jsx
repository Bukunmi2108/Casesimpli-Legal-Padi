import React from 'react'
import { useState } from 'react';
import { GoPlus } from "react-icons/go";
import { AiOutlineMinus } from "react-icons/ai";


const FAQ = () => {
    const [dropdown, setDropdown] = useState(false)

    const handleDropdown = () => {
        setDropdown(!dropdown)
    }
  return (
    <div className="flex flex-col w-full justify-center items-center mt-24 gap-20">
        <div className="flex-col justify-start items-center gap-6 flex">
            <div className="text-black text-center xs:text-2xl sm:text-4xl md:text-5xl font-bold font-lato leading-10">Frequently asked Questions</div>
            <div className="text-center text-primary-text xs:text-xs sm:text-md md:text-lg font-normal font-inter leading-normal">This is what we have for you</div>
        </div>

        <div className='w-full flex flex-col max-w-3xl px-3 gap-3'>
            <div className="flex flex-col w-full gap-2">
                <div className="justify-between items-center flex gap-4 w-full">
                    <div className="text-black xs:text-sm sm:text-lg lg:text-xl font-medium font-lato">
                        What is the Legal Padi web app?
                    </div>
                    <div>
                        <GoPlus className='w-6 h-6' />
                        <AiOutlineMinus className='w-6 h-6' />
                    </div>
                </div>
                <div className="border border-gray-400"></div>
            </div>
        </div>
    </div>  
)
}

export default FAQ