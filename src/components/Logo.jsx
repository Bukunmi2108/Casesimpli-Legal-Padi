import React from 'react'
import LogoImg from '../assets/logo.png'

const Logo = () => {
  return (
    <div className="justify-center items-center gap-2 flex">
      <div className="">
          <img alt='logo' className="w-[24px]" src={LogoImg} />
      </div>
      <div className="h-lg">CaseSimpli Legal Padi</div>
    </div>
  )
}

export default Logo