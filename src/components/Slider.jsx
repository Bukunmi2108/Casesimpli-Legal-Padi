import React, { useEffect, useState } from 'react'
import { Heading } from '../components'
import Slider1 from '../assets/slider1.jpg'
import Slider2 from '../assets/slider2.jpg'
import Slider3 from '../assets/blog-img.png'
import Slider4 from '../assets/slider2.jpg'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'

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
            img: Slider2
        },
    ]

    const [index, setIndex] = useState(1)


    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         setIndex((prevIndex) => {
    //             if (prevIndex == slides.length) {
    //                 return 0
    //             } else {
    //                 return prevIndex + 1
    //             }
    //         })
    //     }, 10000);

    //     return () => clearInterval(intervalId)
    // }, [])  
    
    
    const handleLeftBtn = () => {
        if (index === 1) {
            setIndex(slides.length - 1)
        } else{
            setIndex(prevIndex => prevIndex - 1)
        }
    }

    const handleRightBtn = () => {
        setIndex((prevIndex) => {
            if (prevIndex == slides.length - 1) {
                return 1
            } else {
                return prevIndex + 1
            }
        })
    }
  return (
    <div className='w-full bg-blue-50'>
    <div className='mx-auto max-w-7xl xs:px-4 sm:px-4 '>
        <div className=" w-full mx-auto flex flex-col pt-12 pb-24 items-center justify-center gap-16">

            <div className='mx-auto flex flex-row overflow-hidden rounded-2xl'>
                {
                    slides.map((slide, i) => {
                        return(
                            <div key={i} className={`relative min-w-full rounded-2xl -translate-x-[${(index)*100}%] transition-all ease-in-out`}>
                                <img className='w-full h-full object-cover rounded-2xl' src={slide.img} />
                                <div className='absolute top-0 left-0 w-full h-full flex items-center justify-between z-20'>
                                    <FaArrowAltCircleLeft onClick={handleLeftBtn} className='w-8 h-8 text-white hover:text-gray-100 cursor-pointer hover:w-10 hover:h-10 mx-2 md:mx-4' />
                                    <FaArrowAltCircleRight onClick={handleRightBtn} className='w-8 h-8 text-white hover:text-gray-100 cursor-pointer hover:w-10 hover:h-10 mx-2 md:mx-4'
                                     />
                                </div>
                                <div className='flex z-10 gap-1 absolute bottom-2 w-full items-center justify-center transition-all ease-in-out'>
                                    {
                                        slides.map((slide, j) => {
                                            return(
                                                <div key={j} className={`${index == j? 'bg-primary-blue w-3':'bg-gray-300 w-2'} h-2 rounded-full`}>

                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <div className='absolute top-0 left-0 w-full h-full text-primary-white xs:px-8 sm:px-4 p-4 md:p-8 bg-black bg-opacity-50 flex flex-col gap-8'>
                                    <h3 className='xs:text-4xl sm:text-6xl md:text-8xl font-lato font-bold leading-tighter'>
                                        {slide.title}{index}
                                    </h3>
                                    <p className='text-md md:text-xl font-inter'>
                                        {slide.text}
                                    </p>
                                </div>

                            </div>
                        )
                    })
                }
            </div>

        </div>
    </div>
    </div>
 )
}

export default HeroVideo