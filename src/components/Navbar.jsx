import React from 'react'
import { Btn, Logo } from '../components'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full'>
      <div className="mx-auto max-w-7xl justify-between items-start md:items-center flex w-full px-4 py-2 flex-col md:flex-row gap-4 md:gap-0">
        <Logo />
        <div className="justify-center items-start md:items-center gap-4 flex flex-col md:flex-row">
            <Link to='/'>
              <div className="text-primary-text text-base font-regular font-inter">Home</div>
            </Link>
            <div className="text-primary-text text-base font-regular font-inter">Videos</div>
            <div className="text-primary-text text-base font-regular font-inter">Categories</div>
            <div className="text-primary-text text-base font-regular font-inter">De Law AI</div>
            <div className="text-primary-text text-base font-regular font-inter">Speak to a Lawyer</div>
        </div>
        <div className="justify-start items-center gap-2 flex">
          <Link to="/signup">
            <Btn 
              text='Sign up'
              classes='bg-primary-blue text-white'
            />
          </Link>
          <Link to="/login">
            <Btn 
              text='Sign in'
              classes='border-2 border-primary-blue text-primary-blue'
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar