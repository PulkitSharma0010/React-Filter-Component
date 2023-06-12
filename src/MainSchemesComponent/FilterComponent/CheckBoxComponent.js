import React, { useRef } from 'react';
import "./Filter.css";

export default function CheckBoxComponent({ value, checked, onChange }) {

  return (
    <div className='checkboxComponentDiv'>
      <input
        type="checkbox"
        className='checks'
        checked={checked}
        onChange={onChange}
      />
      <span className='checkboxComponents'>{value}</span>
    </div>
  );
}

