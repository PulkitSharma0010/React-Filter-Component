import React, { useState } from 'react'
import "./Filter.css"

export default function CheckBoxComponent({value,resetCheck}) {

  const [isClicked,setisClicked]=useState(false)

  const handleClick=()=>{
    setisClicked(!isClicked)
  }

  if(resetCheck==false){
    setisClicked(false)
  }

  return (
    <div className='checkboxComponentDiv' onClick={()=>handleClick()}>
      <input type="checkbox" className='checks' checked={isClicked}/><span className='checkboxComponents'>{value}</span>
    </div>
  )
}
