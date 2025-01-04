import React, { useState, useContext } from 'react'
import { Navbar, Footer, Input, Button } from '../../components'
import { useBackendDomain } from '../../contexts/BackendDomainContext'
import { AuthContext } from '../../contexts/AuthContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const {baseUrl} = useBackendDomain();
  const { login } = useContext(AuthContext)
  const navigate = useNavigate();
  
  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData)

    axios.post(`${baseUrl}/user/login`, formData)
    .then((response) => {
      console.log(response.data)
      login(response.data.accessToken, response.data.refreshToken, response.data.user)
      alert('Login successful');
    })
    .catch((error) => {
      console.error(error)
      alert(error.response.data.message)
    })
  }
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