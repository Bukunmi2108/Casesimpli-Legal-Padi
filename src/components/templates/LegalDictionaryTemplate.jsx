import React from 'react'
import { SearchInput } from '..'
 
const LegalDictionaryTemplate = () => {
  return (
    <main className='main divide-y divide-gray-300'>
        <section className='max-w-4xl mx-auto py-8'>
            <SearchInput placeholder={'Search the Dictionary'}/>
        </section>

        <section className='max-w-4xl mx-auto py-8 gap-4 flex flex-col'>
            <h3 className='h-lg'>Treason</h3>
            <div className='text-md font-light font-lato'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore tempora officia ullam neque temporibus quod laudantium unde consequuntur assumenda. Quod magni deserunt omnis in reiciendis debitis, consectetur blanditiis molestias ullam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dolore odit deserunt perferendis corrupti vero inventore aut! Voluptatibus nulla, tempora aliquid voluptates doloremque ad ex illo perferendis et nihil in.
            </div>
        </section>
    </main>

  )
}

export default LegalDictionaryTemplate