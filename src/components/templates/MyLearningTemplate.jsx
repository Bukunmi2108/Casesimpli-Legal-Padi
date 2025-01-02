import React from 'react'
import { Button, CourseMiniDisplay } from '..'


const MyLearningTemplate = () => {
  return (
    <main className='main'>
      <section className='max-w-7xl mx-auto py-8'>

        <h3 className='text-center h-xl mb-4'>My Learning</h3>

        <div className='flex items-center justify-center'>
          <Button text={'Completed'} type='underline' size='medium'/>
          <Button text={'In Progress'} type='muted' size='medium'/>
        </div>

        <div className='mt-8 flex flex-col items-start justify-center mx-auto max-w-4xl w-full divide-y divide-gray-300'>

          <CourseMiniDisplay />
          <CourseMiniDisplay />
          <CourseMiniDisplay />
          <CourseMiniDisplay />
          <CourseMiniDisplay />
          <CourseMiniDisplay />
          <CourseMiniDisplay />
          <CourseMiniDisplay />

        </div>
      </section>
    </main>
  )
}

export default MyLearningTemplate