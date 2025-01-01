import React from 'react'
import { Navbar, Footer, Logo, Input, Button } from '../../components'
import Abstract from '../../assets/svg/abstract.svg'
import { Link } from 'react-router-dom'


const Signup = () => {
  return (
    <div>
      <Navbar />

      <div className='flex flex-col md:flex-row items-center justify-center py-12 max-w-7xl mx-auto'>
        <div className='w-1/2 hidden lg:flex'>
          <img src={Abstract} alt='abstract' />
        </div>

        <div class="bg-gray-50 w-full lg:w-1/2 flex flex-col gap-10 px-8 py-16 rounded-xl">
          <div class=" text-black text-6xl font-bold font-lato leading-[64px]">Login</div>
          <div className="w-full flex flex-col gap-5">
            <Input label={'Email'} placeholder={'Enter your Email'} type='text' className={'w-full'}/>
            <Input label={'Password'} placeholder={'Enter your Password'} type='password' className={'w-full'}/>
          </div>
          <div class="flex gap-2">
            <Link to={'/feed'}>
              <Button text={'Sign up'} type='primary' size='medium' className={'w-full'}/>
            </Link>
            <Link to={'/feed'}>
              <Button text={'Login'} type='secondary' size='medium' className={'w-full'}/>
            </Link>
          </div>
        </div>
      </div>
    
      <Footer />
    </div>
  )
}

export default Signup