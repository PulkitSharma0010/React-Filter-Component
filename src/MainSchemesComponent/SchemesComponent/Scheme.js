import React from 'react'
import "./Scheme.css"

export default function Scheme({buttonClicked,departmentName,schemeName,schemeDescription}) {
  return (
    <div className='schemeDiv'>
      <h2 className='departmentName'>{departmentName}</h2>
      <h2 className='schemeName'>{schemeName}</h2>
      <p className='schemeDescription'>{schemeDescription}</p>
      <button onClick={buttonClicked} className='schemeTableButton'>Click Here For Details</button>
    </div>
  )
}
