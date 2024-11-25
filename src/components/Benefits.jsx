import React from 'react'
import FeaturesSectionDemo from '../components/FeatureSection'

const Benefits = () => {
  return (
    <section className="flex flex-col mt-16 items-center justify-center">
        <div className="flex flex-col justify-start items-center gap-6">
            <div className="text-black xs:text-2xl sm:text-4xl md:text-5xl font-bold font-lato leading-10 text-center">What you would get</div>
            <div className="text-center text-primary-text xs:text-xs sm:text-md md:text-lg font-normal font-inter leading-normal">This is what we have for you</div>
        </div>

        <FeaturesSectionDemo />

    </section>  
)
}

export default Benefits