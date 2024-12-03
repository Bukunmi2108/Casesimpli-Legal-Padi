import React from 'react'
import LogoImg from '../assets/logo.png'

const Logo = ({classes}) => {
  return (
    <div class="justify-center items-center gap-2 flex">
      <div class="">
          <img alt='logo' class="w-[24px]" src={LogoImg} />
      </div>
      <div class={`text-2xl font-bold font-lato ${classes}`}>CaseSimpli Legal Padi</div>
    </div>
  )
}

export default Logo