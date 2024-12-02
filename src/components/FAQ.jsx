import React from 'react'
import { FAQq, Heading } from '../components'



const FAQ = () => {

    const questions = [
        {
            question: 'What is Legal padi?',
            answer: 'Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit'
        },
        {
            question: 'Why Legal padi?',
            answer: 'Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit'
        },
        {
            question: 'What is Legal padi?',
            answer: 'Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit'
        },
    ]


  return (
    <section className="flex flex-col w-full justify-center items-center py-16 gap-16 bg-slate-50">

        <Heading 
            topic={'Frequently asked Questions'}
            subtopic={'Check out some questions we are commonly asked'}
        />

        <div className='w-full flex flex-col max-w-3xl px-3 gap-3'>
            {
                questions.map((question, key) => (
                    <div key={key}>
                        <FAQq 
                            question={question.question}
                            answer={question.answer}
                        />
                    </div>
                ))
            }
        </div>
    </section>  
)
}

export default FAQ