import React from 'react'
import { FAQq, Heading } from '../components'


const FAQ = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center py-16 gap-16">

        <Heading 
            topic={'Frequently asked Questions'}
            subtopic={'Check out some questions we are commonly asked'}
        />

        <div className='w-full flex flex-col max-w-3xl px-3 gap-3'>
            <FAQq 
                question='What is Legal padi?'
                answer='Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit'
            />
            <FAQq 
                question='What is Legal padi?'
                answer='Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit'
            />
            <FAQq 
                question='What is Legal padi?'
                answer='Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit'
            />
            <FAQq 
                question='What is Legal padi?'
                answer='Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit'
            />
        </div>
    </div>  
)
}

export default FAQ