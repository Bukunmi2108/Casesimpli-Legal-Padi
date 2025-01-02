import React from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
import { Button } from '..'
import { FcLike } from "react-icons/fc";
import { CiBookmark } from "react-icons/ci";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";


const CourseViewTemplate = () => {
  return (
    <main className='main divide-y divide-primary-text'>
      <section className='max-w-7xl mx-auto pb-8'> 
        <div className='b-3'>Home - Videos - The Rule of Law</div>

        <div className='flex flex-col w-full gap-4 mt-6'>
          <div>
            <iframe
              width='100%'
              className='h-full aspect-video'
              src='https://www.youtube.com/embed/2YBtspm8j8M'
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            ></iframe>
          </div>

          <div className='w-full flex justify-between items-center p-4 bg-gray-300 rounded-xl font-lato '>
            <span>View Course Content</span>
            <RiArrowDropDownLine className='icon' />
          </div>
        </div>

        <div className='py-4 flex flex-col gap-4 w-full'>
          <div className='w-full flex flex-col gap-1'>
            <h3 className='h-3xl line-clamp-2 text-ellipsis'>Rule of Law in Nigeria</h3>
            <h5 className='text-sm font-light font-lato'>By Bukunmi Akinyemi</h5>

            <div className='flex flex-row items-center justify-between w-full my-2'>
              <div className='flex items-center justify-start gap-2'>
                <FcLike />
                <span>300</span>
              </div>
              <CiBookmark className='icon'/>

            </div>
          </div>

          <div className='flex gap-2 flex-wrap'>
            <Button text={'Contract Law'} type='grey-bg' size='small' className={'w-fit'}/>
            <Button text={'Tort Law'} type='grey-bg' size='small' className={'w-fit'}/>
            <Button text={'Contract Law'} type='grey-bg' size='small' className={'w-fit'}/>
            <Button text={'Tort Law'} type='grey-bg' size='small' className={'w-fit'}/>
            <Button text={'Contract Law'} type='grey-bg' size='small' className={'w-fit'}/>
            <Button text={'Tort Law'} type='grey-bg' size='small' className={'w-fit'}/>
          </div>
        </div>

        <div className='flex flex-col gap-4 py-4'>
          <h3 className='h-md'>Course Description</h3>
          <p className='b-2 font-thin'>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
          </p>
        </div>

        <div className='flex gap-4 p-4 border-y border-gray-500'>
          <IoMdCheckmarkCircleOutline className='icon' />
          <span className='font-lato text-md'>Mark as Completed</span>
        </div>
      </section>
    </main>
  )
}

export default CourseViewTemplate