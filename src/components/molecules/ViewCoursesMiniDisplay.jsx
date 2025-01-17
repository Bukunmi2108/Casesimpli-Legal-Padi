import React from 'react'
import {Link} from 'react-router-dom'
import { IoMdMore } from "react-icons/io";


const CourseMiniDisplay = ({course_uid, type, title, author}) => {
  return (
    <Link to={`/course/${course_uid}`} className='w-full'>
      <div className='flex justify-between items-center w-full py-2 gap-4 hover:bg-gray-100 relative'>

        <div className="flex-col justify-start items-start gap-2">
          <div className="text-primary-text text-xs font-normal font-inter leading-normal">Course</div>
          <div className="text-primary-text text-xl font-semibold font-lato line-clamp-1 text-ellipsis">{title}</div>
          <div className="text-primary-text text-xs font-light font-inter leading-normal">{author}</div>
        </div>

        <IoMdMore className='w-6 h-6 text-primary-text' />
        
        <div className='absolute top-0 right-0'>

        </div>

      </div>
    </Link>
  )
}

export default CourseMiniDisplay