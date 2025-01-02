import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ 
    text, 
    type = 'primary', 
    size = 'medium', 
    onClick, 
    disabled = false,
    className: propsClassName,
    icon,
    link
}) => {

    const buttonTypes = {
        primary: 'bg-primary-blue text-white',
        secondary: 'border-primary-blue border-2 text-primary-blue',
        'grey-border': 'border-2 border-primary-shade text-primary-text',
        'grey-bg': 'bg-primary-shade border border-primary-text text-primary-text',
        underline: 'border-b border-primary-blue text-primary-blue rounded-none',
        muted: 'text-primary-text rouunded-none',
    };

    const buttonSizes = {
        small: 'text-sm font-regular py-2 px-6 rounded-3xl',
        medium: 'text-base font-medium py-3 px-6 rounded-3xl',
        large: 'text-lg font-bold py-4 px-8 rounded',
    };


    const buttonStates = {
        true: 'cursor-not-allowed opacity-50',
        false: 'cursor-pointer',
    };

    const buttonTypeClass = buttonTypes[type] || buttonTypes.primary; // Default to primary
    const buttonSizeClass = buttonSizes[size] || buttonSizes.medium; // Default to medium
    const buttonStateClass = buttonStates[disabled.toString()]; 

    const className = `justify-center items-center font-lato flex hover:opacity-80
                       ${buttonTypeClass} 
                       ${buttonSizeClass} 
                       ${buttonStateClass} 
                       ${propsClassName || ''}`; // Concatenate with optional propsClassName

    return (
        link?
        <Link to={link}>
            <button 
                type={type} 
                onClick={onClick} 
                disabled={disabled} 
                className={className} 
            >
                {icon && <span className='mr-2'>{icon}</span>}
                {text}
            </button>
        </Link> :
        <button 
            type={type} 
            onClick={onClick} 
            disabled={disabled} 
            className={className} >
            {icon && <span className='mr-2'>{icon}</span>}
            {text}
        </button>
    );
};

export default Button;