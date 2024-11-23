import React from 'react'

const Btn = ({classes, text}) => {
  return (
    <div className={`px-6 py-2 rounded text-base font-medium font-lato w-fit ${classes}`}>
      {text}
    </div>
  )
}

export default Btn