import React from 'react'
import { Button, Input } from '..'


const AddEditorTemplate = () => {
  return (
    <main className='main'>
      <section className='max-w-7xl mx-auto py-8'>

        <h3 className='text-center h-xl mb-8'>Add New Editor</h3>

        <div className='mt-8 flex flex-col items-start justify-center mx-auto max-w-2xl w-full gap-6'>

          <Input label={'First Name'} placeholder={'Enter editor\'s first name'} type={'text'} className={'w-full'}/>
          <Input label={'Last Name'} placeholder={'Enter editor\'s last name'} type={'text'} className={'w-full'}/>
          <Input label={'Email'} placeholder={'Enter editor\'s email'} type={'email'} className={'w-full'}/>


          <Button text={'Add New Editor'} type='primary' />
        </div>
      </section>
    </main>
  )
}

export default AddEditorTemplate