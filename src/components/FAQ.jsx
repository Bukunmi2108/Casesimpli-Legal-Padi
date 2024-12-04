import React from 'react'
import { FAQq, Heading } from '../components'



const FAQ = () => {

    const questions = [
        {
            question: 'What is CaseSimpli Legal padi?',
            answer: 'CaseSimpli Legal Padi is a pioneering legal tech platform dedicated to bridging the knowledge gap and facilitating seamless access to legal information. consultation, and services.'
        },
        {
            question: 'How does CaseSimpli Legal padi positively contribute to the Nigerian society?',
            answer: 'Through its innovative platform, CaseSimpli Legal Padi contributes to the betterment of Nigerian society by providing easy access to legal information, facilitating legal consultations and fostering a culture of legal literacy.'
        },
        {
            question: 'Why CaseSimpli Legal padi?',
            answer: <ul className='list-decimal leading-relaxed'>
                <li>Simplified Legal Knowledge: CaseSimpli Legal Padi breaks down complex legal concepts into easy-to-understand language, making it accessible to everyone.</li>
                <li>Innovative Technology: The platform levereages cutting-edge technology to provide a user-friendly experience, stramlined access to legal information and efficient consultation services.</li>
                <li>Expert Legal Guidance: CaseSimpli Legal Padi is backed by a team of experience legal professionsl who provide accurate and reliable guidance.</li>
            </ul>
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