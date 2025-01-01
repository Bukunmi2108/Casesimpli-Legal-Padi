import React from 'react'
import { Heading } from '..'
import FeaturesSectionDemo from './FeatureSection'

const Benefits = () => {
  return (
    <section className="flex flex-col  items-center justify-center py-16 gap-16">
        <Heading 
            topic={'What you would get'}
            subtopic={'This is what we have'}
        />

        <FeaturesSectionDemo />

    </section>  
)
}

export default Benefits