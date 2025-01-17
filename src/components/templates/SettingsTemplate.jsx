import React, { useEffect, useState } from 'react';
import { FiEdit } from "react-icons/fi";
import { Input, Button, Sidelink } from '..';
import { GrSecure } from "react-icons/gr";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoMdLogOut } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import authService from '../../modules/authService';
import { Link } from 'react-router-dom';

const SettingsTemplate = () => {
  const [userData, setUserData] = useState({});
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
  });

  useEffect(() => {
    const fetchUser = async () => {
      const res = await authService.getUser();
      setFormData({
        ...formData,
        first_name: res['first_name'],
        last_name: res['last_name'],
        email: res['email'],
        phone_number: res['phone_number']
      })
      setUserData(res)
    };
    fetchUser();
  }, []);

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Update user data with formData
      const response = await authService.updateUser(formData);
      setUserData(response); // Update local state
      alert('Profile updated successfully!');
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <main className='main'>
      <section className='max-w-7xl mx-auto py-8 divide-y divide-gray-300 gap-8'>
        <div className='flex flex-col items-center justify-center gap-8 pb-8'>
          <h3 className='text-center h-2xl mb-8 text-primary-blue'>Settings</h3>
          <div className='flex flex-col gap-8 max-w-2xl w-full'>
            <div className='relative w-32 h-32 mx-auto'>
              <img src='https://i.pravatar.cc/300' alt='profile' className='rounded-full w-32 h-32 mx-auto' />
              <span className='absolute bottom-0 right-0 p-2 bg-white rounded-full'>
                <FiEdit className='text-primary-text icon' />
              </span>
            </div>

            {formData.email && <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
              <Input
                label={'First name'}
                name={'first_name'}
                placeholder={'Enter your first name'}
                type='text'
                className={'w-full'}
                onChange={handleChange}
                value={formData.first_name} // Use fetched data or form data
              />
              <Input
                label={'Last name'}
                name={'last_name'}
                placeholder={'Enter your last name'}
                type='text'
                className={'w-full'}
                onChange={handleChange}
                value={formData.last_name} // Use fetched data or form data
              />
              <Input
                label={'Email'}
                name={'email'}
                placeholder={'Enter your Email'}
                type='email'
                className={'w-full'}
                onChange={handleChange}
                value={formData.email} // Use fetched data or form data
                disabled // Disable email editing (assuming it's the primary login)
              />
              <Input
                label={'Phone Number'}
                name={'phone_number'}
                placeholder={'Enter your Phone Number'}
                type='text'
                className={'w-full'}
                onChange={handleChange}
                value={formData.phone_number } // Use fetched data or form data
              />

              <Button buttonFormType='submit' text={'Save Changes'} type='primary' className={'w-fit'} />
            </form>}
          </div>
        </div>

        <div className='flex flex-col items-center justify-center gap-8 py-8'>
          <h3 className='text-center h-2xl mb-8 text-primary-blue'>Security</h3>
          <div className='flex flex-col gap-8 max-w-2xl w-full'>
          <div className='flex justify-between items-center gap-4'>
              <div className='flex flex-col gap-2'>
                <h4 className='h-sm text-primary-orange'>Change Password</h4>
                <p className='b-1 md:b-3'>Set Unique Password to protect your account</p>
              </div>
              <GrSecure className='icon text-primary-orange' />
            </div>
            <div className='flex justify-between items-center gap-4'>
              <div className='flex flex-col gap-2'>
                <h4 className='h-sm text-primary-orange'>2 - Step Verification</h4>
                <p className='b-1 md:b-3'>Make your Account extra secure</p>
              </div>
              <RiLockPasswordFill className='icon text-primary-orange' />
            </div>
          </div>
        </div>

        <div className='flex flex-col items-center justify-center gap-2 pt-8 max-w-2xl w-full mx-auto'>
          <Link to={'/logout'} className='w-full'>
            <Sidelink text={'Logout'} icon={<IoMdLogOut className='icon' />} className={'text-primary-orange w-fit'} />
          </Link>

          <Sidelink text={'Delete Account'} icon={<MdDelete className='icon' />} className={'text-red-500 w-fit'} onClick={() => { /* Handle delete account logic here */ }} />
        </div>
      </section>
    </main>
  );
};

export default SettingsTemplate;