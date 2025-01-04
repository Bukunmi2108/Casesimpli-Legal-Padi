import React, { useState } from 'react'
import { Navbar, Footer, Input, Button } from '../../components'
import axios from 'axios'
import { useBackendDomain } from '../../contexts/BackendDomainContext'
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirm_password: '',
  });

  const navigate = useNavigate();
  const {baseUrl} = useBackendDomain();

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const passwordMatch = (password, confirm_password) => {
    if (password !== confirm_password) {
      return 'Passwords do not match';
    }
    return false;
  }

  const onSubmit = (e) => {
    e.preventDefault();

    const psword_match = passwordMatch(formData.password, formData.confirm_password);
    if (psword_match) {
      alert(psword_match);
    } else{

      // Handle form submission with formData here 

      axios.post(`${baseUrl}/user/signup`, formData)
      .then((response) => {
        alert('Signup successful');
        navigate('/login');
      })
      .catch((error) => {
        alert(error.response.data.message)
      })
    }
  };

  return (
    <div className='bg-gray-50'>
      <Navbar />

      <div className="max-w-4xl w-full flex flex-col gap-10 px-4 py-16 mx-auto">
        <div className=" text-black text-6xl font-bold font-lato">Sign up</div>
        <form autoComplete='off' onSubmit={onSubmit} className="w-full flex flex-col gap-5 mx-auto">
          <Input 
            autoComplete='off' 
            label={'First name'} 
            name={'first_name'}
            placeholder={'Enter First name'} 
            type='text' 
            className={'w-full'}
            onChange={handleChange}
            value={formData.first_name}
            required
          />
          <Input 
            autoComplete='off' 
            label={'Last name'} 
            name='last_name'
            placeholder={'Enter Last name'} 
            type='text' 
            className={'w-full'}
            onChange={handleChange}
            value={formData.last_name}
            required
          />
          <Input 
            autoComplete='off' 
            label={'Email'} 
            name='email'
            placeholder={'Enter your Email'} 
            type='email' 
            className={'w-full'}
            onChange={handleChange}
            value={formData.email}
            required
          />
          <Input 
            autoComplete='off' 
            label={'Password'} 
            name='password'
            placeholder={'Enter your Password'} 
            type='password' 
            className={'w-full'}
            onChange={handleChange}
            value={formData.password}
            required
            min={10}
          />
          <Input 
            autoComplete='off' 
            label={'Confirm Password'} 
            name='confirm_password'
            placeholder={'Confirm your Password'} 
            type='password' 
            className={'w-full'}
            onChange={handleChange}
            value={formData.confirm_password}
            required
            min={10}
          />
          <div className="flex gap-2">
            <Button buttonFormType='submit' text={'Sign up'} type='primary' size='medium' className={'w-fit'}/>
            <Button link={'/login'} text={'Login'} type='secondary' size='medium' className={'w-fit'}/>
          </div>
        </form>
      </div>
    
      <Footer />
    </div>
  )
}

export default Signup