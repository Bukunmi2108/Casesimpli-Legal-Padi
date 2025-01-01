import React from 'react'
import LogoImg from '../../assets/png/logo.png'

const Logo = ({colour}) => {

  const colourStyles = {
    white: 'text-white',
    black: 'text-black',
  }

  const className = `h-lg
                    ${colourStyles[colour] || colourStyles.black}`


  return (
    <div className="justify-center items-center gap-4 flex">
      <div className="">
          <img alt='logo' className="w-[24px]" src={LogoImg} />
      </div>
      <div className={className}>CaseSimpli Legal Padi</div>
    </div>
  )
}

export default Logo