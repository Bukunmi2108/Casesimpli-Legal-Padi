import React from 'react'
import { useState } from 'react';
import { GoPlus } from "react-icons/go";
import { AiOutlineMinus } from "react-icons/ai";

const FAQq = ({question, answer}) => {
    const [dropdown, setDropdown] = useState(false)

    const handleDropdown = () => {
        setDropdown(!dropdown)
    }
  return (
    <div className="flex flex-col w-full gap-2 transition-all ease-in-out">
        <div className="justify-between items-center flex gap-4 w-full cursor-pointer" onClick={handleDropdown}>
            <div className="text-primary-text xs:text-sm sm:text-lg lg:text-xl font-lato font-semibold">
                {question}
            </div>
            <div>
                {!dropdown? <GoPlus className='w-6 h-6' /> : <AiOutlineMinus className='w-6 h-6' /> }
            </div>
        </div>
        {dropdown && <div className='xs:text-sm sm:text-base font-inter font-light'>
            {answer}
        </div>}
        <div className="border border-gray-400"></div>
    </div>  
)
}

export default FAQq