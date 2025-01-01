import React, { useState } from 'react'
import { MdMenu } from "react-icons/md";
import { MdClose, MdCategory, MdOutlineAddBox  } from 'react-icons/md';
import { Button, Sidelink } from '../../components'
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
    const [role, setRole] = useState('user')

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

        <nav className={`${menuState? '-left-96' : 'flex'} flex-col gap-8 items-start justify-start absolute top-[83px] md:top-[99px] left-0 bg-white border border-r-gray-500 px-4 py-4 transition-all ease-in-out duration-400 z-50`}>
            <div className='flex flex-col gap-2 justify-start items-start w-full'>
                <span className='h-sm text-primary-text'>Home</span>
                <div className='flex flex-col gap-2 justify-start items-start w-full'>
                    <Sidelink text={'Home'} type='primary' icon={<IoHomeSharp className='icon' />}/>
                    <Sidelink text={'De Law AI'} type='primary' icon={<FaRobot className='icon' />}/>
                    <Sidelink text={'All Categories'} type='primary' icon={<MdCategory className='icon' />}/>
                    <Sidelink text={'Call a Lawyer'} type='primary' icon={<IoIosCall className='icon' />}/>
                    <Sidelink text={'Settings'} type='primary' icon={<IoIosSettings className='icon' />}/>
                </div>
            </div>
            
            <div className='flex flex-col gap-2 justify-start items-start w-full'>
                <span className='h-sm text-primary-text'>Learning</span>
                <div className='flex flex-col gap-2 justify-start items-start w-full'>
                    <Sidelink text={'Legal Dictionary'} type='primary' icon={<GoBook className='icon' />}/>
                    <Sidelink text={'Featured Courses'} type='primary' icon={<RiBookShelfLine className='icon' />}/>
                    <Sidelink text={'My Learning'} type='primary' icon={<IoSchoolOutline className='icon' />}/>
                    <Sidelink text={'Bookmarks'} type='primary' icon={<CiBookmark className='icon' />}/>
                    <Sidelink text={'Notifications'} type='primary' icon={<IoIosNotificationsOutline className='icon' />}/>
                </div>
            </div>
            
            {(role === "editor" || role === "admin") && <div className='flex flex-col gap-2 justify-start items-start w-full'>
                <span className='h-sm text-primary-text'>Editor</span>
                <div className='flex flex-col gap-2 justify-start items-start w-full'>
                    <Sidelink text={'Add new Courses'} type='primary' icon={<MdOutlineAddBox  className='icon' />}/>
                    <Sidelink text={'View your Courses'} type='primary' icon={<HiOutlineViewGridAdd  className='icon' />}/>
                </div>
            </div>}
              
            {role === "admin" && <div className='flex flex-col gap-2 justify-start items-start w-full'>
                <span className='h-sm text-primary-text'>Admin</span>
                <div className='flex flex-col gap-2 justify-start items-start w-full'>
                    <Sidelink text={'Add Editor'} type='primary' icon={<IoIosPersonAdd   className='icon' />}/>
                    <Sidelink text={'Add Admin'} type='primary' icon={<IoIosPersonAdd   className='icon' />}/>
                    <Sidelink text={'All Admins'} type='primary' icon={<FaUsers  className='icon' />}/>
                    <Sidelink text={'All Editors'} type='primary' icon={<FaUsers  className='icon' />}/>
                    <Sidelink text={'All Courses'} type='primary' icon={<FaUsers  className='icon' />}/>
                </div>
            </div>}
            
            <Sidelink text={'Logout'} type='primary' icon={<IoMdLogOut className='icon' />}/>
        </nav>
    </header>
  )
}

export default Nav