import React from 'react'
import Btn from './Btn'
import { IoDocumentTextOutline, IoSend } from 'react-icons/io5'

const ContentArea = ({ sidebarState, onClick }) => {

  const prompts = [
    {
      icon: <IoDocumentTextOutline className='w-6 h-6 text-primary-text' />,
      prompt: 'Draft a Legal Document'
    },
    {
      icon: <IoDocumentTextOutline className='w-6 h-6 text-primary-text' />,
      prompt: 'Draft a Legal Document'
    },
    {
      icon: <IoDocumentTextOutline className='w-6 h-6 text-primary-text' />,
      prompt: 'Draft a Legal Document'
    },
    {
      icon: <IoDocumentTextOutline className='w-6 h-6 text-primary-text' />,
      prompt: 'Draft a Legal Document'
    },
  ]
  return (
    <main className={`${!sidebarState? 'm-0 md:ml-[80px]': 'm-0 md:ml-[200px]'} w-full h-screen bg-gray-50 p-4 overflow-x-hidden relative`}>

      <div className='grid grid-cols-2 gap-2 mt-32 mx-auto max-w-lg'>
        {
          prompts.map((prompt, key) => {
            return(
              <div className='flex flex-col items-center justify-center font-inter bg-gray-100 hover:bg-slate-100 p-4 gap-4 '>
                {prompt.icon}
                <span className='text-center text-sm text-primary-text'>{prompt.prompt}</span>
              </div>
            )
          })
        }
      </div>

      <div className='flex items-center justify-center bg-white rounded-full px-4 mx-auto max-w-5xl w-full absolute bottom-24 left-0 right-0'>
        <input 
          className='w-full h-12 font-lato outline-none'
          placeholder='Ask De Law AI'
        />

        <IoSend className='w-6 h-6 text-primary-blue' />
      </div>

    </main>
  )
}

export default ContentArea