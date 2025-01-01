import React from 'react'

const Heading = ({topic, subtopic}) => {
  return (
    <div className="flex flex-col justify-start items-center gap-6">
        <div className="text-black h-3xl text-center ">{topic}</div>
        <div className="text-center md:text-left text-primary-text b-3 font-inter leading-normal">{subtopic}</div>
    </div>  
)
}

export default Heading