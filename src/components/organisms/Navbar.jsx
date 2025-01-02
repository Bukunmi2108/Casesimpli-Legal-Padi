import React from 'react'
import { useState } from 'react'
import { Logo, Button } from '..'
import { Link } from 'react-router-dom'
import { FiMenu } from "react-icons/fi";


const Navbar = () => {
  const [menuState, setMenuState] = useState(false)

  const handleMenuClick = () => {
    setMenuState(!menuState)
  }

  return (
    <div className='w-full z-30 shadow-md'>
      <div className="mx-auto max-w-8xl justify-between items-start md:items-center flex w-full px-4 py-4 flex-col md:flex-row gap-4 md:gap-0 relative">
        <Link to='/'>
          <Logo />
        </Link>


        {menuState && <div className="justify-center items-start md:items-center gap-4 flex md:hidden flex-col md:flex-row">
            <Link to='/home'>
              <div className="navlinks">Home</div>
            </Link>
            <div className="navlinks">Videos</div>
            <div className="navlinks">Categories</div>
            <div className="navlinks">De Law AI</div>
            <div className="navlinks">Speak to a Lawyer</div>
        </div>}

        {menuState && <div className="justify-start items-center gap-2 flex md:hidden">
          <Button link={'/signup'} text='Sign up' type='primary' size='small'/>
          <Button link={'/login'} text='Login' type='secondary' size='small'/>
        </div>}



        <div className="justify-center items-start gap-4 hidden md:flex">
            <Link to='/home'>
              <div className="navlinks">Home</div>
            </Link>
            <Link to='/'>
              <div className="navlinks">Videos</div>
            </Link>
            <Link to='/'>
              <div className="navlinks">Categories</div>
            </Link>
            <Link to='/'>
              <div className="navlinks">De Law AI</div>
            </Link>
            <Link to='/'>
              <div className="navlinks">Speak to a Lawyer</div>
            </Link>
        </div>

        <div className="justify-start items-center gap-2 hidden md:flex">
          <Button link={'/signup'} text='Sign up' type='primary' size='small'/>
          <Button link={'/login'} text='Login' type='secondary' size='small'/>
        </div>

        <FiMenu className='w-8 h-8 absolute top-4 right-5 flex md:hidden' onClick={handleMenuClick} />
      </div>
    </div>
  )
}

export default Navbar