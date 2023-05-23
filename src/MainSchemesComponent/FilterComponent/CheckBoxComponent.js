import React, { useState, useEffect } from 'react'
import "./Filter.css"

export default function CheckBoxComponent({ value, checked, onChange }) {

  return (
    <div className='checkboxComponentDiv' onClick={onChange}>
      <input type="checkbox" className='checks' checked={checked} /><span className='checkboxComponents'>{value}</span>
    </div>
  )
}
