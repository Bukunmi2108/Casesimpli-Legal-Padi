import React from 'react'
import { Link } from 'react-router-dom'

const UserFeed = ({ sidebarState, onClick }) => {

  return (
    <main className={`${!sidebarState? 'm-0 md:ml-[80px]': 'm-0 md:ml-[200px]'} w-full bg-gray-50 p-4 overflow-x-hidden`} onClick={onClick}>

       

    </main>
  )
}

export default UserFeed