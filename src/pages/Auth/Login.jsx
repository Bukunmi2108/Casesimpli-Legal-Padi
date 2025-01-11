import React, { useState } from 'react'
import { Navbar, Footer, Input, Button } from '../../components'
import { useNavigate } from 'react-router-dom'
import authService from '../../modules/authService'


const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  
  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
  
    try {
      await authService.login(formData.email, formData.password)
      alert('Login successful');
      navigate('/feed');
    } catch (error) {
      alert('Login failed')
      console.error(error);
    }
    

  };
  return (
    <div>
      <Navbar />

      <div className="bg-gray-50 w-full flex flex-col gap-10 px-4 py-16 mx-auto max-w-4xl">
        <div className=" text-black text-6xl font-bold font-lato">Login</div>
        <form onSubmit={onSubmit} className="w-full flex flex-col gap-5">
          <Input 
            label={'Email'} 
            name={'email'}
            placeholder={'Enter your Email'} 
            type='email' 
            className={'w-full'}
            onChange={handleChange}
            value={formData.email}
            required
          />

          <Input 
            label={'Password'} 
            name={'password'}
            placeholder={'Enter your Password'} 
            type='password' 
            className={'w-full'}
            onChange={handleChange}
            value={formData.password}
            required
          />
        
          <div className="flex gap-2">
            <Button buttonFormType='submit' text={'Login'} type='primary' size='medium' className={'w-fit'}/>
            <Button link={'/signup'} text={'Sign up'} type='secondary' size='medium' className={'w-fit'}/>
          </div>
        </form>
      </div>
    
      <Footer />
    </div>
  )
}

export default Login