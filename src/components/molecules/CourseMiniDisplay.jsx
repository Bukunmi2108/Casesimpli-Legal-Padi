import React from 'react'
import { TiInputChecked } from "react-icons/ti";
import {Link} from 'react-router-dom'

const CourseMiniDisplay = ({link}) => {
  return (
    <Link to="/course/1" className='w-full'>
      <div className='flex justify-between items-center w-full py-2 gap-4 hover:bg-gray-100'>

        <div className="flex-col justify-start items-start gap-2">
          <div className="text-primary-text text-xs font-normal font-inter leading-normal">CASE STUDY</div>
          <div className="text-primary-text text-xl font-semibold font-lato line-clamp-1 text-ellipsis">Rule of Law in Nigeria</div>
          <div className="text-primary-text text-xs font-light font-inter leading-normal">Bukunmi Akinyemi</div>
        </div>

        <TiInputChecked className='w-8 h-8 text-green-500' />

      </div>
    </Link>
  )
}

export default CourseMiniDisplay