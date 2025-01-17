import React, {useState, useEffect} from 'react'
import tagService from '../../modules/tagService'
import {Button, CourseDisplay} from '../../components'

const CourseCategoryFeedTemplate = ({tag_id}) => {
  const [ courses, setCourses ] = useState([])

  useEffect(() => {
    const fetchCourses = async() => {
      const res = await tagService.getTagCourses(tag_id)
      setCourses(res)
    }
    fetchCourses()
  }, [tag_id])



  return (
    <main className='pt-20'>
      <section className='max-w-7xl mx-auto py-8'>
        <div className='flex items-center justify-center'>
          <Button text={'Video'} type='underline' size='medium'/>
          <Button text={'Article'} type='muted' size='medium'/>
          <Button text={'CaseStudies'} type='muted' size='medium'/>
        </div>

        <div className='mt-8 flex flex-col items-start justify-center w-full'>
          <h2 className='h-lg'>Start Learning</h2>
          {courses? <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 w-full mt-8'>
            {
              courses.map((course) => (
                <CourseDisplay key={course.uid} author={`${course.user.first_name} ${course.user.last_name}`} course_uid={course.uid} thumbnail={course.thumbnail} title={course.title} tags={course.tags} likes={course.likes_count} />
              ))
            }
          </div> : <h1 className='h-lg'>No Course to Display</h1>}
        </div>
      </section>
    </main>
  )
}

export default CourseCategoryFeedTemplate