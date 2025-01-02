import React, { useState } from 'react'
import { MdMenu } from "react-icons/md";
import { MdClose, MdCategory, MdOutlineAddBox  } from 'react-icons/md';
import { Button, Sidelink } from '../../components'
import { Link } from 'react-router-dom';
import { IoHomeSharp, IoSchoolOutline } from "react-icons/io5";
import { FaRobot } from "react-icons/fa";
import { IoIosCall, IoIosSettings, IoIosNotificationsOutline, IoMdLogOut } from "react-icons/io";
import { GoBook } from "react-icons/go";
import { RiBookShelfLine } from "react-icons/ri";
import { CiBookmark } from "react-icons/ci";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import { IoIosPersonAdd } from "react-icons/io";
import { FaUsers } from "react-icons/fa";



const Nav = () => {

    const [menuState, setMenuState] = useState(true)
    const [role, setRole] = useState('admin')

    /// role can be user, premium, editor, admin. i would use use context later to manage this
    
    const UserRole = {
        user: "Upgrade",
        premium: "Premium",
        editor: "Editor",
        admin: "Admin"
    }

    const handleMenu = () => {
        setMenuState(!menuState)
    }

      // Helper function to conditionally render sections
  const renderSection = (title, items) => (
    UserRole && items.length > 0 && (
      <>
        <span className='h-sm text-primary-text'>{title}</span>
        <div className='flex flex-col gap-2 justify-start items-start w-full'>
          {items.map((item) => (
            <Link to={item.link} key={item.text} className='w-full'>
              <Sidelink key={item.text} {...item} />
            </Link>
          ))}
        </div>
      </>
    )
  );

  const userMenuItems = [
    { text: 'Home', icon: <IoHomeSharp className='icon' />, link: '/feed' },
    { text: 'De Law AI', icon: <FaRobot className='icon' />, link: '/feed' },
    { text: 'All Categories', icon: <MdCategory className='icon' />, link: '/feed' },
    { text: 'Call a Lawyer', icon: <IoIosCall className='icon' />, link: '/feed' },
    { text: 'Settings', icon: <IoIosSettings className='icon' />, link: '/feed' },
  ];

  const learningMenuItems = [
    { text: 'Legal Dictionary', icon: <GoBook className='icon' />, link: '/feed' },
    { text: 'Featured Courses', icon: <RiBookShelfLine className='icon' />, link: '/featured' },
    { text: 'My Learning', icon: <IoSchoolOutline className='icon' />, link: '/mylearning' },
    { text: 'Bookmarks', icon: <CiBookmark className='icon' />, link: '/bookmark' },
    { text: 'Notifications', icon: <IoIosNotificationsOutline className='icon' />, link: '/notification' },
  ];

  const editorMenuItems = [
    { text: 'Add new Courses', icon: <MdOutlineAddBox className='icon' />, link: '/addcourse' },
    { text: 'View your Courses', icon: <HiOutlineViewGridAdd className='icon' />, link: '/viewcourses' },
  ];

  const adminMenuItems = [
    { text: 'Add Editor', icon: <IoIosPersonAdd className='icon' />, link: '/addeditor' },
    { text: 'Add Admin', icon: <IoIosPersonAdd className='icon' />, link: '/addadmin' },
    { text: 'All Admins', icon: <FaUsers className='icon' />, link: '/alladmins' },
    { text: 'All Editors', icon: <FaUsers className='icon' />, link: '/alleditors' },
    { text: 'All Courses', icon: <FaUsers className='icon' />, link: '/allcourses' },
  ];

  return (
    <header className='bg-white w-full border-b border-gray-400 relative z-50'>
        <nav className='flex justify-between items-center max-w-7xl mx-auto px-4 py-4 md:py-6'>
            <div className='flex items-center justify-center gap-2'>
                <div onClick={handleMenu}>
                    {menuState? <MdMenu className='w-8 h-8 md:w-12 md:h-12'/> : <MdClose className='w-8 h-8 md:w-12 md:h-12'/>}
                </div>
                <span className='h-2xl'>LegalPadi</span>
            </div>

            <Button text={UserRole[role]} type='grey-bg' size='medium'/>
        </nav>

        <nav className={`${(menuState === true)? '-left-96' : 'left-0'} flex flex-col gap-8 items-start justify-start absolute top-[83px] md:top-[99px] bg-white border border-r-gray-500 px-4 py-4 transition-all ease-in-out duration-400 z-50`}>
            <div className='flex flex-col gap-2 justify-start items-start w-full'>
                {renderSection('User', userMenuItems)}
            </div>
            
            <div className='flex flex-col gap-2 justify-start items-start w-full'>
                {renderSection('Learning', learningMenuItems)}
            </div>
            
            {(role === "editor" || role === "admin") && <div className='flex flex-col gap-2 justify-start items-start w-full'>
                {renderSection('Editor', editorMenuItems)}
            </div>}
              
            {role === "admin" && <div className='flex flex-col gap-2 justify-start items-start w-full'>
                {renderSection('Admin', adminMenuItems)}
            </div>}
            
            <Sidelink text={'Logout'} type='primary' icon={<IoMdLogOut className='icon' />}/>
        </nav>
    </header>
  )
}

export default Nav