import React from 'react'
import { Heading } from '..'
import ReactPlayer from 'react-player'


const HeroVideo = () => {
  return (
    <div className='mx-auto max-w-7xl xs:px-4 sm:px-4'>
        <div className=" w-full mx-auto flex flex-col py-24 items-center justify-center gap-12">

            <Heading 
                topic={'Curious about CaseSimpli Legal Padi?'}
                subtopic={'Watch this quick video to discover how we are empowering Nigerians through Legal literacy'}
            />

            <div className='w-full mx-auto'>
                <ReactPlayer className={'w-full h-full aspect-video mx-auto'} controls  loop width={'w-full'} height={'h-96'} url='videos/video.mp4' />
            </div>

        </div>
    </div>
 )
}

export default HeroVideo