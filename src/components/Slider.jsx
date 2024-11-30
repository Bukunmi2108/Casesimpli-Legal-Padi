import React from 'react'
import { Heading } from '../components'
import Slider1 from '../assets/slider1.jpg'
import Slider2 from '../assets/slider2.jpg'

const HeroVideo = () => {
    const slides = [
        {
            title: 'Think legal padi, think legal peace of mind',
            text:'Transform your legal uncertainties into confidence, make us your legal padi',
            img: Slider1
        },
        {
            title: 'Are you unsure about your legal case?',
            text:'Get strightforward answers and explanations on complex legal terms',
            img: Slider2
        },
        {
            title: 'Making the Nigerian Society a legal literate one!',
            text:'Know your rights and join the growing network of legally informed Nigerians',
            img: Slider1
        },
    ]
  return (
    <div className='mx-auto max-w-7xl xs:px-4 sm:px-4'>
        <div className=" w-full mx-auto flex flex-col py-24 items-center justify-center gap-16">

            <Heading 
                topic={'Curious about CaseSimpli Legal Padi?'}
                subtopic={'Watch this quick video to discover how we are empowering Nigerians through Legal literacy'}
            />

        </div>
    </div>
 )
}

export default HeroVideo