import React, { useEffect, useState } from 'react'
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { Button } from '..'
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { CiBookmark } from "react-icons/ci";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { useParams } from 'react-router-dom';
import courseService from '../../modules/courseService';



const CourseViewTemplate = () => {

  const [course, setCourse] = useState({})
  const [courseVideos, setCourseVideos] = useState({})
  const [tags, setTags] = useState([])
  const [currentVideo, setCurrentVideo] = useState('')
  const [contentDropdown, setContentDropdown] = useState(false)
  const {course_uid} = useParams()
  const [liked, setLiked] = useState(false)
  const [likes, setLikes] = useState(0)

  useEffect(() => {
    const fetchCourse = async() => {
      const res = await courseService.getACourse(course_uid)      
      setCourse(res)
      setCourseVideos(res.courses)
      setTags(res.tags)
      setLikes(res.likes_count)

      // Set like
      const likeState = await courseService.checkIfLiked(res.uid)
      console.log(likeState)
      if (likeState === false) {setLiked(false)} else {setLiked(true)}
      
      
      // Set video
      const firstVideo = Object.entries(res.courses)[0][1]
  
      const urlCheck = courseService.watchUrlToEmbedUrl(firstVideo)
      if (urlCheck) {
        setCurrentVideo(urlCheck)
      } else {
        setCurrentVideo(firstVideo);
      }
    }

    fetchCourse()
  }, [course_uid])

  
  const handleContentDropdown = () => {
    setContentDropdown(!contentDropdown)
  }

  const likeCourse = async() => {
    setLiked(true)
    setLikes(prevLike => prevLike + 1)
    const res = await courseService.likeCourse(course.uid)
    alert(res);
    
  }

  const unLikeCourse = async() => {
    setLiked(false)
    setLikes(prevLike => prevLike - 1)
    const res = await courseService.unLikeCourse(course.uid)
    alert('Unlike');
  }
  return (
    <main className='main divide-y divide-primary-text'>
      <section className='max-w-7xl mx-auto pb-8'> 
        <div className='b-3'>Home - Videos - {course.title}</div>

        {currentVideo && <div className='flex flex-col w-full gap-4 mt-6'>
          <div>
            <iframe
              width='100%'
              className='h-full aspect-video'
              src={currentVideo} //embed the current video here later
              title='Course Video Player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            ></iframe>
          </div>

          <div onClick={handleContentDropdown} className='w-full flex justify-between items-center p-4 bg-gray-300 rounded-xl font-lato '>
            <span>View Course Content</span>
            {!contentDropdown? <RiArrowDropDownLine className='icon' /> : <RiArrowDropUpLine className='icon' />}
          </div>

          {contentDropdown && <div className='w-full p-4 overflow-x-scroll bg-gray-100 rounded-xl font-lato'>
            <div className='flex flex-row overflow-x-visible gap-2'>

              {Object.entries(courseVideos).map(([key, value]) => (
                <div key={Math.random() * 100} onClick={
                  () => {
                    const urlCheck = courseService.watchUrlToEmbedUrl(value)
                      if (urlCheck) {setCurrentVideo(urlCheck)} else {setCurrentVideo(value)}}
                } className='w-24 p-2 flex-shrink-0 bg-gray-200 hover:bg-blue-100'>
                  <div className='relative rounded-xl'>
                    <img src='https://i.pravatar.cc/300' className='w-full h-12 object-cover'/>
                    <div className='absolute top-0 left-0 w-full h-full bg-black opacity-90'></div>
                  </div>
                  <h6 className='text-xs text-ellipsis line-clamp-2 font-lato rounded-xl'>{key}</h6>
                </div>
              ))}
              
            </div>
          </div>}
        </div>}

        <div className='py-4 flex flex-col gap-4 w-full'>
          <div className='w-full flex flex-col gap-1'>
            <h3 className='h-3xl line-clamp-2 text-ellipsis'>{course.title}</h3>
            {course.user && <h5 className='text-sm font-light font-lato'>By {course.user.first_name} {course.user.last_name}</h5>}

            <div className='flex flex-row items-center justify-between w-full my-2'>
              <div className='flex items-center justify-start gap-2'>
                <span>{!liked? <FcLikePlaceholder onClick={likeCourse} className='icon' />:<FcLike onClick={unLikeCourse} className='icon' />}</span>
                <span>{likes}</span>
              </div>
              <CiBookmark className='icon'/>

            </div>
          </div>

          {tags && <div className='flex gap-2 flex-wrap'>
            {tags.map(({name, id}) => (
              <Button  link={`/category/${id}`} key={id} text={name} type='grey-bg' size='small' className={'w-fit'}/>
            ))}
          </div>}
        </div>

        <div className='flex flex-col gap-4 py-4'>
          <h3 className='h-md'>Course Description</h3>
          <p className='b-2 font-thin'>
            {course.description}
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