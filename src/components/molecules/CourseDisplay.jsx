import React, { useEffect, useState } from 'react'
import courseService from '../../modules/courseService';

import { Button } from '..'
import { IoBookmarkOutline } from "react-icons/io5";
import { FcLike } from "react-icons/fc";
import { FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';

const CourseDisplay = ({title, author, course_uid, thumbnail, likes, link, tags}) => {

  
  return (
    <Link to={`/course/${course_uid}`}>
      <div className='flex flex-col gap-4 w-full bg-white rounded-xl shadow-sm hover:bg-blue-50'>
        <div className='w-full bg-gray-400 rounded-t-xl h-64 relative'>
          {thumbnail && <img src={thumbnail} alt={title} className='h-full w-full object-cover'/>}
          <div className='absolute top-2 right-2'>
            <IoBookmarkOutline className='icon text-white' />
          </div>
          <div className='absolute bottom-0 left-0'>
            <Button text={'premium'} type='muted' size='small' className={'w-fit text-white'} icon={<FaLock className='' />}/>
          </div>
        </div>

        <div className='pb-8 px-4 flex flex-col gap-4'>
          <div className='w-full flex flex-col gap-1'>
            <h3 className='h-xl line-clamp-2 text-ellipsis'>{title}</h3>
            <h5 className='text-sm font-light font-lato'>By {author}</h5>
            <div className='flex items-center justify-start gap-2'>
              <FcLike />
              <span>{likes}</span>
            </div>
          </div>

          {tags && <div className='flex gap-2'>
            {tags.map(({id, name}) => (
              <Button key={id} text={name}  link={`/category/${id}`} type='grey-bg' size='small' className={'w-fit'}/>
            ))}
          </div>}
        </div>
      </div>
    </Link>
  )
}

export default CourseDisplay