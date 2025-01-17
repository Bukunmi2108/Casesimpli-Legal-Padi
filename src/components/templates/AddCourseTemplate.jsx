import React, { useState } from 'react';
import { Button, Input } from '..';
import { useNavigate } from 'react-router-dom';
import courseService from '../../modules/courseService';
import tagService from '../../modules/tagService';
import { MdCancel } from "react-icons/md";

const AddCourseTemplate = () => {
  // FOR TAGS
  const [tags, setTags] = useState([]);
  const [queryTags, setQueryTags] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [courseType, setCourseType] = useState('video')
  // FOR COURSES
  const [courses, setCourses] = useState({
    video_1: '',
    video_2: '',
  });

  // FOR THE FORMDATA
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    thumbnail: null,
  });

  
  const navigate = useNavigate();

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };


  const handleFileChange = (e) => {
    setFormData({ ...formData, thumbnail: e.target.files[0] });
  };

  const handleCourseChange = (name, value) => {
    setCourses({ ...courses, [name]: value });

  };

  // TAGS HANDLER HERE
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleTagSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim() !== '') {
      setTags([...tags, inputValue.trim()]);
      setInputValue('');
    } 
  };


  //Get All Query Tags
  const fetchTags = async() => {
    if (inputValue != ''){
      const res = await tagService.getTagName(inputValue)
      setQueryTags(res)
    }
  }

  //ONCLICK TAG
  const onClickTag = (tag_name) => {
    setInputValue(tag_name)
    setTags([...tags, tag_name]);
    setInputValue('');
    setQueryTags(null)
  }

  //////THERE IS A BUG HERE
  //DELETE TAG
  const deleteTag = (index) => {
    setTags((prevTags) => prevTags.filter(tag => tag.id !== index));
  };


  // ONSUBMIT HANDLER
  const onSubmit = async (e) => {
    e.preventDefault();

    const data = {}
    data['title'] = formData.title
    data['type'] = courseType
    data['description'] = formData.description
    data['thumbnail'] = formData.thumbnail
    data['courses'] = courses
    data['tags'] = tags

    console.log(data)

    try {
      const response = await courseService.createCourse(data)

      alert('Course created successfully');
      navigate(`/course/${response.uid}`);
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <main className='main'>
      <section className='max-w-7xl mx-auto py-8'>
        <h3 className='text-center h-xl mb-4'>Add New Course</h3>

        <div className='flex items-center justify-center'>
          <Button text={'Video'} type='underline' size='medium' />
          <Button text={'Article'} type='muted' size='medium' />
        </div>

        <form onSubmit={onSubmit} className='mt-8 flex flex-col items-start justify-center mx-auto max-w-2xl w-full gap-6'>
          <Input
            label={'Course Title'}
            name={'title'}
            placeholder={'Enter course title'}
            type={'text'}
            className={'w-full'}
            required
            value={formData.title}
            onChange={handleChange}
          />

          <Input
            label={'Description'}
            placeholder={'Enter course description'}
            type={'text'}
            className={'w-full'}
            name='description'
            value={formData.description}
            onChange={handleChange}
          />

          <div className='w-full flex gap-2 flex-col'>
            <span>Upload Thumbnail</span>
            <input
            type={'file'}
            className={'w-fit'}
            name='thumbnail'
            onChange={handleFileChange}
          />
          </div>

          <div className='w-full flex gap-2 flex-col'>
            <Input
              name={'video_1'}
              label={`Enter Video Link 1`}
              placeholder={`Video Link 1`}
              type={'text'}
              className={'w-full'}
              required
              value={courses.video_1}
              onChange={handleCourseChange}
            />
            <Input
              name={'video_2'}
              label={`Enter Video Link 2`}
              placeholder={`Video Link 2`}
              type={'text'}
              className={'w-full'}
              required
              value={courses.video_2}
              onChange={handleCourseChange}
            />
          </div>

          {/* TAGS HERE */}
          <form onSubmit={handleTagSubmit} className='w-full flex gap-2 flex-col'>
            <div className='flex flex-wrap gap-2'>
              {tags.map((tag, index) => (
                <span key={index} className='relative'>
                  <Button type='grey-bg' size='small' text={tag} />
                  <MdCancel onClick={() => {deleteTag(index)}} className='absolute top-0 right-0 icon cursor-pointer'/>
                </span>
              ))}
            </div>
            <div className='flex w-full items-center justify-center border rounded-xl p-2 border-primary-text'>
              <input
                className='outline-none w-full bg-none'
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={fetchTags}
                placeholder="Enter tags..."
              />
              <Button buttonFormType='submit' type='primary' text={'Add Tag'} onClick={handleTagSubmit} className={'text-nowrap'}/>
            </div>
            {queryTags && <ul>
              {queryTags.map((tag) => (
                <li key={tag.id} onClick={() =>{onClickTag(tag.name)}} className='p-2 font-lato font-light text-sm hover:bg-gray-200 cursor-pointer'>
                  {tag.name}
                </li>
              ))}
            </ul>}
          </form>

          <Button buttonFormType='submit' text={'Create Course'} type='primary' />
        </form>
      </section>
    </main>
  );
};

export default AddCourseTemplate;