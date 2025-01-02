import React from 'react'
import { Navbar, Footer, Input, Button } from '../../components'


const Login = () => {
  return (
    <div>
      <Navbar />

      <div class="bg-gray-50 w-full flex flex-col gap-10 px-4 py-16 mx-auto max-w-4xl">
        <div class=" text-black text-6xl font-bold font-lato">Login</div>
        <div className="w-full flex flex-col gap-5">
          <Input label={'Email'} placeholder={'Enter your Email'} type='text' className={'w-full'}/>
          <Input label={'Password'} placeholder={'Enter your Password'} type='password' className={'w-full'}/>
        </div>
        <div class="flex gap-2">
          <Button link={'/feed'} text={'Login'} type='primary' size='medium' className={'w-full'}/>
          <Button link={'/signup'} text={'Sign up'} type='secondary' size='medium' className={'w-full'}/>
        </div>
      </div>
    
      <Footer />
    </div>
  )
}

export default Login