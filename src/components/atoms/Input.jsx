import React, { useState } from 'react';

const Input = ({ 
    label, 
    type = 'text', 
    name,
    placeholder, 
    onChange, 
    value, 
    error, 
    className, 
    ...otherProps 
}) => {

    const [inputValue, setInputValue] = useState(value || ''); 
    const [nameValue, setNameValue] = useState(name || ''); 

    const handleChange = (event) => {
        setNameValue(event.target.name);
        setInputValue(event.target.value);
        const { name, value } = event.target; // Destructure name and value from event.target
        if (onChange) {
          onChange(name, value); // Pass name and value to the parent component's onChange prop
        }
      };


    return (
        <div className={`flex flex-col gap-1 text-sm font-medium font-lato ${className}`}>
            {label && <label htmlFor={label} className='pl-4'>{label}</label>}
            <input 
                type={type} 
                name={nameValue}
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