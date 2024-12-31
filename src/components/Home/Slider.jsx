import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

import slide1 from '../../assets/slide1.jpg'
import slide2 from '../../assets/slide2.jpg'
import slide3 from '../../assets/slide3.jpg'

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  const slides = [
    {
        title: 'Think legal padi, think legal peace of mind',
        text:'Transform your legal uncertainties into confidence, make us your legal padi',
        img: slide1
    },
    {
        title: 'Are you unsure about your legal case?',
        text:'Get straightforward answers and explanations on complex legal terms',
        img: slide2
    },
    {
        title: 'Making the Nigerian Society a legal literate one!',
        text:'Know your rights and join the growing network of legally informed Nigerians',
        img: slide3
    },
]
  return (
    <section className='w-full bg-gray-950'>
        <div className='mx-auto max-w-6xl xs:px-4 sm:px-4 '>
            <Slider className="px-2" {...settings}>
                {
                    slides.map((slide, index) => {
                        return(
                            <div key={index} className='flex flex-col gap-8' >
                                <h3 className="text-primary-shade xs:text-3xl sm:text-4xl md:text-5xl font-bold font-lato text-left my-8">{slide.title}</h3>
                                <p className="text-left text-gray-400 xs:text-lg sm:text-xl md:text-2xl font-normal font-inter leading-normal">{slide.text}</p>
                                <img className="w-full object-cover my-8 rounded-3xl" src={slide.img} alt="Slide" />
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    </section>
  );
}