import React, { useEffect, useState } from 'react'
import { ViewCoursesMiniDisplay } from '..'
import courseService from '../../modules/courseService'


const ViewCoursesTemplate = () => {
  const [courses, setCourses] = useState([])
  const [author, setAuthor] = useState('')

  useEffect(() => {
    const fetchCourses = async() => {
      const res = await courseService.getAllUserCourses()
      setCourses(res.courses)
      setAuthor(`${res.first_name} ${res.last_name}`)
    }
    fetchCourses()
  }, [])
  return (
    <main className='main'>
      <section className='max-w-7xl mx-auto py-8'>

        <h3 className='text-center h-xl mb-8'>View Your Courses</h3>


        <div className='mt-8 flex flex-col items-start justify-center mx-auto max-w-4xl w-full divide-y divide-gray-300'>

          {courses.map((course) => (
            <ViewCoursesMiniDisplay key={Math.random()*100} title={course.title} author={author} course_uid={course.uid} />
          ))}

        </div>
      </section>
    </main>
  )
}

export default ViewCoursesTemplate