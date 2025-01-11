import React, { useContext, useEffect, useState } from 'react'
import { SearchInput, Button, CourseDisplay } from '../../components'
import { FaSearch } from "react-icons/fa";
import courseService from '../../modules/courseService';

const UserFeed = () => {
  const [ courses, setCourses ] = useState([])
  const username = 'Bukunmi'


  useEffect(() => {
    const fetchCourses = async() => {
      const res = await courseService.getAllCourses()
      setCourses(res)
    }
    fetchCourses()
  }, [])


  return (
    <main className='main divide-y divide-primary-text'>
      <section className='max-w-7xl mx-auto pb-8'>
        <div className='flex flex-col items-center justify-center gap-4'>
          <span className='h-xl py-4'>Welcome back, {username}</span>

          <div className='max-w-2xl w-full mt-4'>
            <SearchInput type='text' placeholder={'Search Courses'} icon={<FaSearch className='icon text-gray-500'/>}/>
          </div>
        </div>

        <div className='py-8 flex items-center justify-center text-primary-text'>
          <div className='flex flex-col gap-2 p-4 bg-gray-200 rounded max-w-2xl'>
            <h3 className='h-lg text-left'>Legal Word of the day</h3>
            <h5 className='h-md text-left'>Treason</h5>
            <p className='text-sm text-left line-clamp-2 text-ellipsis'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec erat nec elit tempus fermentum. Nullam nec erat nec elit tempus fermentum.</p>
            <Button text={'Read more'} type='grey-bg' size='medium' className={'w-fit mt-2'}/>
          </div>
        </div>
      </section>

      <section className='max-w-7xl mx-auto py-8'>
        <div className='flex items-center justify-center'>
          <Button text={'Video'} type='underline' size='medium'/>
          <Button text={'Article'} type='muted' size='medium'/>
          <Button text={'CaseStudies'} type='muted' size='medium'/>
        </div>

        <div className='mt-8 flex flex-col items-start justify-center w-full'>
          <h2 className='h-lg'>Start Learning</h2>
          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 w-full mt-8'>
            {
              courses.map((course) => (
                <CourseDisplay key={course.uid} author={`${course.user.first_name} ${course.user.last_name}`} course_uid={course.uid} thumbnail={course.thumbnail} title={course.title} tags={course.tags} />
              ))
            }
          </div>
        </div>
      </section>
    </main>
  )
}

export default UserFeed