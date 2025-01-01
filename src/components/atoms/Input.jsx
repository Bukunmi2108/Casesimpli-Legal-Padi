import React, { useState } from 'react';

const Input = ({ 
    label, 
    type = 'text', 
    placeholder, 
    onChange, 
    value, 
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
        <div className={`flex flex-col gap-1 text-sm font-medium font-lato ${className}`}>
            {label && <label htmlFor={label} className='pl-4'>{label}</label>}
            <input 
                type={type} 
                placeholder={placeholder} 
                value={inputValue} 
                onChange={handleChange} 
                className={`border rounded-xl p-4 outline-none border-primary-text ${error ? 'border-red-500' : ''}`} 
                {...otherProps} 
            />
            {error && <span className="text-red-500 text-xs mt-1">{error}</span>}
        </div>
    );
};

export default Input;