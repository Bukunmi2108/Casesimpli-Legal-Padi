import React from 'react'

const Logo = ({classes}) => {
  return (
    <div class="justify-center items-center gap-2 flex">
      <div class="w-[36.64px] h-9 relative">
          <img alt='logo' class="w-[36.64px] h-9 left-0 top-0 absolute" src="https://via.placeholder.com/37x36" />
      </div>
      <div class={`text-2xl md:text-4xl font-bold font-lato ${classes}`}>Legal Padi</div>
    </div>
  )
}

export default Logo