import React from 'react'

const Btn = ({classes, text}) => {
  return (
    <div className={`sm:px-6 py-2 xs:px-4 sm:rounded xs:rounded-sm sm:text-base xs:text-sm font-medium font-lato w-fit cursor-pointer ${classes}`}>
      {text}
    </div>
  )
}

export default Btn