import React from 'react'

const Btn = ({classes, text}) => {
  return (
    <div className={`sm:px-6 py-2 xs:px-4 sm:rounded xs:rounded-sm md:text-lg xs:text-md font-medium font-inter w-fit cursor-pointer ${classes}`}>
      {text}
    </div>
  )
}

export default Btn