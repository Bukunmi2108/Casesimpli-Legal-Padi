import React from 'react'

const Sidelink = ({
    text,
    icon,
    type = 'primary',
    className,
    onclick,
    }) => {

    const linkType = {
        primary: 'text-primary-blue',
        secondary: 'text-primary-text',
    }


    const Styles = `px-3 py-2 rounded border border-primary-shade justify-start items-center gap-2 text-primary-text flex w-full bg-white hover:bg-primary-shade font-lato font-bold text-md
    ${linkType[type] || linkType.primary}
    ${className? className: ''}`
  return (
    <div 
    className={Styles}
    onClick={onclick}    
    >
        {icon && <span>{icon}</span>}
        {text}
    </div>
  )
}

export default Sidelink