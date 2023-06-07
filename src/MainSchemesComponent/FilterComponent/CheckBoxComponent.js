import React, { useRef } from 'react';
import "./Filter.css";

export default function CheckBoxComponent({ value, checked, onChange }) {
  // const checkboxRef = useRef(null);

  // const handleClick = () => {
  //   checkboxRef.current.click();
  // };

  return (
    <div className='checkboxComponentDiv' 
    // onClick={handleClick}
    >
      <input
        type="checkbox"
        // onClick={handleClick}
        className='checks'
        checked={checked}
        onChange={onChange}
        // ref={checkboxRef}
      />
      <span className='checkboxComponents'>{value}</span>
    </div>
  );
}

