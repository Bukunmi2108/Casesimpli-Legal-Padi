import React, { useState } from 'react'
import Profile from '../assets/profile.png'
import { GoHome } from 'react-icons/go'
import { RiRobot3Line } from 'react-icons/ri'
import { IoCallOutline, IoSettingsOutline } from 'react-icons/io5'
import { BiCategory } from 'react-icons/bi'
import { TbSquareToggle } from 'react-icons/tb'

const Sidebar = ({ handleSidebarState, mouseState, sidebarState }) => {

    const SideLinks = [
        {
            icon: <GoHome className='w-6 h-6 text-primary-blue' />,
            text: 'Home'
        },
        {
            icon: <RiRobot3Line className='w-6 h-6 text-primary-blue' />,
            text: 'De Law AI'
        },
        {
            icon: <IoCallOutline className='w-6 h-6 text-primary-blue' />,
            text: 'Call a Lawyer'
        },
        {
            icon: <BiCategory className='w-6 h-6 text-primary-blue' />,
            text: 'All Categories'
        },
        {
            icon: <IoSettingsOutline className='w-6 h-6 text-primary-blue' />,
            text: 'Settings'
        },
    ]

    const Histories = [
        'Generate a Contract document',
        'How can i defend myself in court without a Lawyer',
        'What are the Fundamental human rights?',
        'Kali vs Okoli 2021, Case study'
    ]


  return (
    <div className={`bg-white border-r-2 border-gray-100 ${sidebarState? 'w-[200px]': 'w-[80px]'} h-full z-10 flex fixed flex-col p-2 gap-4`} onMouseEnter={mouseState}>

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
                        <div key={key} className='px-4 py-2 border-gray-300 border-2 rounded-xl flex flex-row gap-4 items-center justify-start'>
                            {sidelink.icon}

                            {sidebarState && <h3 className='font-lato text-md font-bold text-primary-blue'>
                                {sidelink.text}
                            </h3>}
                        </div>
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

)
}

export default Sidebar