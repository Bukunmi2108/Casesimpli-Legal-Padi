import React from 'react'
import { Button, Input } from '..'

const AddCourseTemplate = () => {
  return (
    <main className='main'>
      <section className='max-w-7xl mx-auto py-8'>

        <h3 className='text-center h-xl mb-4'>Add New Course</h3>

        <div className='flex items-center justify-center'>
          <Button text={'Video'} type='underline' size='medium'/>
          <Button text={'Article'} type='muted' size='medium'/>
        </div>

        <div className='mt-8 flex flex-col items-start justify-center mx-auto max-w-2xl w-full gap-6'>

          <Input label={'Course Title'} placeholder={'Enter course title'} type={'text'} className={'w-full'}/>
          <Input label={'Description'} placeholder={'Enter course description'} type={'text'} className={'w-full'}/>
          <Input label={'Upload Thumbnail'} placeholder={'Enter course description'} type={'file'} className={'w-fit'}/>
          
          <div className='w-full flex gap-2 flex-col'>
            <Input label={'Enter Video Link'} placeholder={'Video Link 1'} type={'text'} className={'w-full'}/>
            <Input placeholder={'Video Link 2'} type={'text'} className={'w-full'}/>
          </div>

          {/* TAGS HERE */}

          <Button text={'Create Course'} type='primary' />
        </div>
      </section>
    </main>
  )
}

export default AddCourseTemplate