import React from 'react'

const Heading = ({topic, subtopic}) => {
  return (
    <div className="flex flex-col justify-start items-center gap-6">
        <div className="text-black xs:text-3xl sm:text-4xl md:text-5xl font-bold font-lato text-center md:text-left">{topic}</div>
        <div className="text-center md:text-left text-primary-text xs:text-xs sm:text-md md:text-lg font-normal font-inter leading-normal">{subtopic}</div>
    </div>  
)
}

export default Heading