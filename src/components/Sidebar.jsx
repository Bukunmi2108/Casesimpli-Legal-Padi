import React, { useState } from 'react'
import Profile from '../assets/profile.png'
import { GoHome } from 'react-icons/go'
import { RiRobot3Line } from 'react-icons/ri'
import { IoCallOutline, IoSettingsOutline } from 'react-icons/io5'
import { BiCategory } from 'react-icons/bi'
import { TbSquareToggle } from 'react-icons/tb'
import { Link } from 'react-router-dom'

const Sidebar = ({ handleSidebarState, mouseState, sidebarState }) => {

    const SideLinks = [
        {
            icon: <GoHome className='w-5 h-5 md:w-6 md:h-6 text-primary-blue' />,
            text: 'Home',
            link: '/home'
        },
        {
            icon: <RiRobot3Line className='w-5 h-5 md:w-6 md:h-6 text-primary-blue' />,
            text: 'De Law AI',
            link: '/delawai'
        },
        {
            icon: <IoCallOutline className='w-5 h-5 md:w-6 md:h-6 text-primary-blue' />,
            text: 'Call a Lawyer',
            link: '/home'
        },
        {
            icon: <BiCategory className='w-5 h-5 md:w-6 md:h-6 text-primary-blue' />,
            text: 'All Categories',
            link: '/home'
        },
        {
            icon: <IoSettingsOutline className='w-5 h-5 md:w-6 md:h-6 text-primary-blue' />,
            text: 'Settings',
            link: '/home'
        },
    ]

    const Histories = [
        'Generate a Contract document',
        'How can i defend myself in court without a Lawyer',
        'What are the Fundamental human rights?',
        'Kali vs Okoli 2021, Case study'
    ]


  return (<>
    <div className={`bg-white border-r-2 border-gray-100 ${sidebarState? 'w-[200px] ': 'w-[80px]'} h-full z-10 hidden md:flex fixed flex-col p-2 gap-4`} onMouseEnter={mouseState}>

        < TbSquareToggle onClick={handleSidebarState} className='w-5 h-5 text-gray-400' />


        <div className='p-2 border-gray-300 shadow-sm border-2 rounded-lg flex flex-row gap-4'>
            <img className='w-12' src={Profile} alt='Profile picture' />

            {sidebarState && <div className='flex flex-col items-start justify-start'>
                <h3 className='font-lato text-md font-bold'>Bukunmi</h3>
                <div className='flex flex-row items-center justify-center gap-2'>
                    <div className='rounded-full w-2 h-2 bg-green-400'></div>
                    <span className='tracking-wide'>Active</span>
                </div>
            </div>}
        </div>

        <div className='w-full border-b-2 border-primary-shade'></div>

        <div className='flex flex-col gap-2'>
            {
                SideLinks.map((sidelink, key) => {
                    return (
                        <Link to={sidelink.link}>                       
                            <div key={key} className='px-4 py-2 border-gray-300 border-2 rounded-xl flex flex-row gap-4 items-center justify-start hover:bg-primary-shade'>
                                {sidelink.icon}

                                {sidebarState && <h3 className='font-lato text-md font-bold text-primary-blue group-hover:text-white'>
                                    {sidelink.text}
                                </h3>}
                            </div>
                        </Link>

                    )
                })
            }
        </div>

        <div className='w-full border-b-2 border-primary-shade'></div>
        
        {sidebarState && <div className='flex flex-col gap-2 font-inter'>
            <span className='!font-lato font-bold'>History</span>
            <div className='flex flex-col gap-2'>
                {
                    Histories.map((history, key) => {
                        return(
                            <div key={key} className=' flex flex-row gap-2 items-center justify-start p-2 rounded-xl border border-gray-300'>
                                <div className='rounded-full w-2 h-2 bg-orange-400'>
                                </div>
                                <h4 className='h-6 truncate'>{history}</h4>
                            </div>
                        )
                    })
                }
            </div>
        </div>}

    </div>

    <div className={`border-r-2 border-gray-100 ${sidebarState? 'w-[200px] h-full bg-white': 'w-[80px] h-fit bg-primary-blue rounded-r'} z-10 flex md:hidden fixed flex-col p-2 gap-4`}>

        < TbSquareToggle onClick={handleSidebarState} className={`w-6 h-6 ${sidebarState?'text-gray-400' : 'text-white'} my-2 mx-4`} />


        {sidebarState && <div className='p-2 border-gray-300 shadow-sm border-2 rounded-lg flex flex-row gap-4'>
            <img className='w-12' src={Profile} alt='Profile picture' />

            {sidebarState && <div className='flex flex-col items-start justify-start'>
                <h3 className='font-lato text-md font-bold'>Bukunmi</h3>
                <div className='flex flex-row items-center justify-center gap-2'>
                    <div className='rounded-full w-2 h-2 bg-green-400'></div>
                    <span className='tracking-wide'>Active</span>
                </div>
            </div>}
        </div>}

        {sidebarState && <div className='w-full border-b-2 border-primary-shade'></div>}

        {sidebarState && <div className='flex flex-col gap-2'>
            {
                SideLinks.map((sidelink, key) => {
                    return (
                        <Link to={sidelink.link}>                       
                            <div key={key} className='px-4 py-2 border-gray-300 border-2 rounded-xl flex flex-row gap-4 items-center justify-start hover:bg-primary-shade'>
                                {sidelink.icon}

                                {sidebarState && <h3 className='font-lato text-md text-primary-blue group-hover:text-white'>
                                    {sidelink.text}
                                </h3>}
                            </div>
                        </Link>

                    )
                })
            }
        </div>}

        {sidebarState && <div className='w-full border-b-2 border-primary-shade'></div>}
        
        {sidebarState && <div className='flex flex-col gap-2 font-inter'>
            <span className='!font-lato font-bold'>History</span>
            <div className='flex flex-col gap-2'>
                {
                    Histories.map((history, key) => {
                        return(
                            <div key={key} className=' flex flex-row gap-2 items-center justify-start p-2 rounded-xl border border-gray-300'>
                                <div className='rounded-full w-2 h-2 bg-orange-400'>
                                </div>
                                <h4 className='text-sm truncate'>{history}</h4>
                            </div>
                        )
                    })
                }
            </div>
        </div>}

    </div>

</>)
}

export default Sidebar