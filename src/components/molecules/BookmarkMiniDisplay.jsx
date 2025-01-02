import React from 'react'
import {Link} from 'react-router-dom'
import { FaBookmark } from "react-icons/fa";


const CourseMiniDisplay = ({link, type, title, author}) => {
  return (
    <Link to="/course/1" className='w-full'>
      <div className='flex justify-between items-center w-full py-2 gap-4 hover:bg-gray-100'>

        <div class="flex-col justify-start items-start gap-2">
          <div class="text-primary-text text-xs font-normal font-inter leading-normal">CASE STUDY</div>
          <div class="text-primary-text text-xl font-semibold font-lato line-clamp-1 text-ellipsis">Rule of Law in Nigeria</div>
          <div class="text-primary-text text-xs font-light font-inter leading-normal">Bukunmi Akinyemi</div>
        </div>

        <FaBookmark  className='w-6 h-6 text-primary-blue' />

      </div>
    </Link>
  )
}

export default CourseMiniDisplay