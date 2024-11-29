import React, { useState } from 'react'
import { Navbar, Sidebar, DeLawAi } from '../components'

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

          <DeLawAi 
          sidebarState={sidebarState}
          />
        </div>

    </div>
  )
}

export default MainFeed