import React from 'react'
import "./Scheme.css"

export default function Scheme({ buttonClicked, departmentName, schemeName, schemeDescription,schemeAge,schemeBeneficiaries,schemeStateCenter,schemeGender,schemeOccupation,schemePDF }) {
  return (
    <div className='schemeDiv'>
      <h2 className='departmentName'>{departmentName}</h2>
      <h2 className='schemeName'>{schemeName}</h2>
      <p className='schemeDescription'>{schemeDescription}</p>
      <div className='schemeCardMainDiv'>
        <div className='schemeCardDiv'>
          <span className='schemeCardSpan'>Age: {schemeAge}</span>
          <span className='schemeCardSpan'>Beneficiaries: {schemeBeneficiaries}</span>
          <span className='schemeCardSpan'>State/Center: {schemeStateCenter}</span>
        </div>
        <div className='schemeCardDiv'>
          <span className='schemeCardSpan'>Gender: {schemeGender}</span>
          <span className='schemeCardSpan'>Occupation: {schemeOccupation}</span>
          <button onClick={buttonClicked} className='schemeTableButton'>Click Here For Details</button>
        </div>
      </div>
      <a className='schemeTableArrowButton' target='blank' href={schemePDF}>&rarr;</a>
    </div>
  )
}
