import React from 'react'
import { Button } from '..'
import { IoBookmarkOutline } from "react-icons/io5";
import { FcLike } from "react-icons/fc";
import { FaLock } from "react-icons/fa";

const CourseDisplay = ({title, author, course_uid, thumbnail, likes, tags}) => {

  /// PROPS TO BE IMPLEMENTED LATER
  
  return (
    <div className='flex flex-col gap-4 w-full bg-white rounded-b-xl shadow-sm'>
      <div className='w-full bg-gray-400 rounded-t-xl h-48 relative'>
        <div className='absolute top-2 right-2'>
          <IoBookmarkOutline className='icon text-white' />
        </div>
        <div className='absolute bottom-0 left-0'>
          <Button text={'premium'} type='muted' size='small' className={'w-fit text-white'} icon={<FaLock className='' />}/>
        </div>
      </div>

      <div className='pb-8 px-4 flex flex-col gap-4'>
        <div className='w-full flex flex-col gap-1'>
          <h3 className='h-xl line-clamp-2 text-ellipsis'>Rule of Law in Nigeria</h3>
          <h5 className='text-sm font-light font-lato'>By Bukunmi Akinyemi</h5>
          <div className='flex items-center justify-start gap-2'>
            <FcLike />
            <span>300</span>
          </div>
        </div>

        <div className='flex gap-2'>
          <Button text={'Contract Law'} type='grey-bg' size='small' className={'w-fit'}/>
          <Button text={'Tort Law'} type='grey-bg' size='small' className={'w-fit'}/>
        </div>
      </div>
    </div>  
  )
}

export default CourseDisplay