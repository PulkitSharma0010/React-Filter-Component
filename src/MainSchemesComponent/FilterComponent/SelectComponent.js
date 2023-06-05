import React from 'react';
import "./Filter.css"

export default function SelectComponent({ options, value, onChange }) {
    return (
        <div>
            <select className='schemeSelect' value={value} onChange={(e) => onChange(e.target.value)}>
                {options.map((option, index) => (
                    <option key={index} {...index === 0 && { hidden: true }} value={option}>{option}</option>
                ))}
            </select>
        </div>
    );
}






