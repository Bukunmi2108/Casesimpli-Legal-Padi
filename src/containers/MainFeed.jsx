import React, { useState } from 'react'
import { Navbar, Sidebar, ContentArea } from '../components'

const MainFeed = () => {
  const [ sidebarState, setSidebarState ] = useState(false)

  const handleSidebarState = () => {
    setSidebarState(!sidebarState)
  }

  const mouseState = () => {
    setSidebarState(true)
  }


  return (
    <div>
        <Navbar />
        <div className='flex flex-row'>
          <Sidebar 
            handleSidebarState={handleSidebarState}
            mouseState={mouseState}
            sidebarState={sidebarState}
          />

          <ContentArea 
          sidebarState={sidebarState}
          />
        </div>

    </div>
  )
}

export default MainFeed