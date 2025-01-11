import React, { useState } from 'react';
import { Button, Input } from '..';
import { useNavigate } from 'react-router-dom';
import courseService from '../../modules/courseService';

const AddCourseTemplate = () => {
  // FOR TAGS
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState('');

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

  // ONSUBMIT HANDLER
  const onSubmit = async (e) => {
    e.preventDefault();

    const data = {}
    data['title'] = formData.title
    data['description'] = formData.description
    data['thumbnail'] = formData.thumbnail
    data['courses'] = courses
    data['tags'] = tags

    console.log(data)

    try {
      const response = await courseService.createCourse(data)
      console.log(response)

      alert('Course created successfully');
      navigate('/courses');
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
                <span key={index}>
                  <Button type='grey-bg' size='small' text={tag} />
                </span>
              ))}
            </div>
            <div className='flex w-full items-center justify-center border rounded-xl p-2 border-primary-text'>
              <input
                className='outline-none w-full bg-none'
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Enter tags..."
              />
              <Button buttonFormType='submit' type='primary' text={'Add Tag'} onClick={handleTagSubmit} className={'text-nowrap'}/>
            </div>
          </form>

          <Button buttonFormType='submit' text={'Create Course'} type='primary' />
        </form>
      </section>
    </main>
  );
};

export default AddCourseTemplate;