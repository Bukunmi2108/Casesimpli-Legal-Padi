import React from 'react'
import { Navbar, Footer, Logo, Btn } from '../components'
import Abstract from '../assets/abstract.svg'


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
              <div class="flex-col justify-center items-start gap-2 flex">
                    <div class="text-primary-text text-sm font-medium font-lato">
                        Enter Email
                    </div>
                    <input 
                        className='w-full h-[60px]  bg-white rounded shadow border border-primary-text placeholder:text-[#a4a4a4] placeholder:text-base placeholder:font-inter placeholder:font-normal px-4'
                        placeholder='johnparker@gmail.com'
                    />
              </div>
              <div class="flex-col justify-center items-start gap-2 flex">
                    <div class="text-primary-text text-sm font-medium font-lato">
                        Enter Password
                    </div>
                    <input 
                        className='w-full h-[60px]  bg-white rounded shadow border border-primary-text placeholder:text-[#a4a4a4] placeholder:text-base placeholder:font-inter placeholder:font-normal px-4'
                        placeholder='***********'
                    />
              </div>
          </div>
          <div class="flex gap-2">
            <Btn 
                classes='bg-white text-primary-blue border border-primary-blue'
                text='Register'
            />
            <Btn 
                classes='bg-primary-blue text-white'
                text='Login'
            />
          </div>
        </div>
      </div>
    
      <Footer />
    </div>
  )
}

export default Signup