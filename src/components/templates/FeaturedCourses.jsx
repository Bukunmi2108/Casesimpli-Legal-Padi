import React from 'react'
import { Button, CourseDisplay } from '../../components'


const FeaturedCourses = () => {
  return (
    <main className='main divide-y divide-primary-text'>

      <section className='max-w-7xl mx-auto py-8'>
        <div className='flex items-center justify-center'>
          <Button text={'Video'} type='underline' size='medium'/>
          <Button text={'Article'} type='muted' size='medium'/>
          <Button text={'CaseStudies'} type='muted' size='medium'/>
        </div>

        <div className='mt-8 flex flex-col items-start justify-center w-full'>
          <h2 className='h-lg'>Featured Courses</h2>
          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 w-full mt-8'>
            <CourseDisplay />
            <CourseDisplay />
            <CourseDisplay />
            <CourseDisplay />
            <CourseDisplay />
            <CourseDisplay />
            <CourseDisplay />
            <CourseDisplay />
            <CourseDisplay />
            <CourseDisplay />
            <CourseDisplay />
            <CourseDisplay />
          </div>
        </div>
      </section>
    </main>
  )
}

export default FeaturedCourses