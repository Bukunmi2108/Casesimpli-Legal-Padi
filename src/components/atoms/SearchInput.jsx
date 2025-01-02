import React, { useState } from 'react';

const SearchInput = ({ 
    label, 
    type = 'text', 
    placeholder, 
    onChange, 
    value, 
    icon,
    error, 
    className, 
    ...otherProps 
}) => {

    const [inputValue, setInputValue] = useState(value || ''); 

    const handleChange = (event) => {
        setInputValue(event.target.value);
        if (onChange) {
            onChange(event.target.value); 
        }
    };

    return (
        <div className={`flex items-center justify-start gap-1 text-lg font-medium font-lato bg-gray-50 border-b border-primary-text ${className}`}>
            {label && <label htmlFor={label} className='pl-4'>{label}</label>}
            {icon && <span>{icon}</span>}
            <input 
                type={type} 
                placeholder={placeholder} 
                value={inputValue} 
                onChange={handleChange} 
                className={`bg-gray-50 placeholder:text-gray-500 p-4 outline-none ${error ? 'border-red-500' : ''}`} 
                {...otherProps} 
            />
            {error && <span className="text-red-500 text-xs mt-1">{error}</span>}
        </div>
    );
};

export default SearchInput;