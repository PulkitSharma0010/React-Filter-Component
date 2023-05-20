import React from 'react'
import "./Filter.css"
import CheckBoxComponent from './CheckBoxComponent'
import { useState } from 'react';

export default function Filter() {

  const FilterList = [
    {
      Gender: ['Male', 'Female'],
    },
    {
      Caste: ['All', 'Scheduled Cast (SC)', 'Scheduled Tribe (SC)', 'Other Backward Classes (OBC)', 'Particularly Vulnerable Tribal Group (PVTG)', 'General'],
    },
    {
      Level: ['State', 'Centre']
    },
    {
      Residence: ['Both', 'Rural', 'Urban'],
    },
    {
      Minority: ['No', 'Yes']
    },
    {
      Disability: ['No', 'Yes']
    },
    {
      'Benefit Type': ['Cash', 'Composite', 'In Kind']
    },
    {
      'Marital Status': ['All', 'Never Married', 'Widowed', 'Divorced', 'Separated']
    },
    {
      'Bellow Poverty Line': ['Yes', 'No']
    },
    {
      'Employement Status': ['All', 'Employed', 'Self-Employed/Entrepreneur', 'Unemployed']
    },
    {
      Occupation: ['All', 'Student', 'Unorganized Worker', 'Artisans, Spinners & Weavers', 'Farmer']
    },
    {
      Qualification: ['8th', '10th', '10+2', 'Graduate', 'Post Graduate']
    },
    {
      'Application Mode': ['Online', 'Offline']
    },
  ];

  let clickStatus=true;
  const resetClick=()=>{
    clickStatus=false;
  }

  return (
    <div className='mainFilterDiv'>
      <div className='filterDiv1'>
        <h2 className='mainFilterHeading'>Filter By</h2>
        <button className='resetFilterButton' onClick={resetClick}>Reset Filters</button>
      </div>

      {FilterList.map((item, key) => (

        <div className='filterDivs'>
          <span className='filterHeadings'>{Object.keys(item)[0]}</span>
          {item[Object.keys(item)[0]].map(items => <CheckBoxComponent resetCheck={clickStatus}  value={`${items}`} />)}
        </div>
      ))
      }
    </div>
  )
}