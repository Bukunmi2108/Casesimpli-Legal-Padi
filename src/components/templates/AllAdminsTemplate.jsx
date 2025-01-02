import React from 'react'
import { Button, ViewCoursesMiniDisplay } from '..'


const AllAdminsTemplate = () => {
  return (
    <main className='main'>
      <section className='max-w-7xl mx-auto py-8'>

        <h3 className='text-center h-xl mb-8'>View All Admins</h3>


        <div className='mt-8 flex flex-col items-start justify-center mx-auto max-w-4xl w-full divide-y divide-gray-300'>

          <ViewCoursesMiniDisplay />
          <ViewCoursesMiniDisplay />
          <ViewCoursesMiniDisplay />
          <ViewCoursesMiniDisplay />
          <ViewCoursesMiniDisplay />
          <ViewCoursesMiniDisplay />

        </div>
      </section>
    </main>
  )
}

export default AllAdminsTemplate