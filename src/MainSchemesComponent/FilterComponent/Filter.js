import React from 'react'
import "./Filter.css"
import CheckBoxComponent from './CheckBoxComponent'
import { useState, useEffect } from 'react';
import SelectComponent from './SelectComponent'

export default function Filter() {

  const FilterList = [
    {
      'Gender': ['Male', 'Female'],
    },
    {
      'Age': ['','1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100', '101', '102', '103', '104', '105', '106', '107', '108', '109', '110', '111', '112', '113', '114', '115', '116', '117', '118', '119', '120']
    },
    {
      'Caste': ['All', 'Scheduled Caste (SC)', 'Scheduled Tribe (SC)', 'Other Backward Classes (OBC)', 'Particularly Vulnerable Tribal Group (PVTG)', 'General'],
    },
    {
      'Level': ['State', 'Centre']
    },
    {
      'Residence': ['Both', 'Rural', 'Urban'],
    },
    {
      'Minority': ['No', 'Yes']
    },
    {
      'Disability': ['No', 'Yes']
    },
    {
      'Disability Percentage': ['','5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
    },
    {
      'Benefit Type': ['Cash', 'Composite', 'In Kind']
    },
    {
      'Marital Status': ['All', 'Never Married', 'Widowed', 'Divorced', 'Separated']
    },
    {
      'Below Poverty Line': ['Yes', 'No']
    },
    {
      'Employment Status': ['All', 'Employed', 'Self-Employed/Entrepreneur', 'Unemployed']
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

  const [checkboxStatus, setCheckboxStatus] = useState({});

  const resetClick = () => {
    setCheckboxStatus({});
  };

  const handleCheckboxChange = (category, value) => {
    if (((category === 'Age')||(category === 'Disability Percentage'))) {
      setCheckboxStatus((prevStatus) => ({
        ...prevStatus,
        [category]: value,
      }));
    } else {
    setCheckboxStatus((prevStatus) => ({
      ...prevStatus,
      [category]: {
        ...prevStatus[category],
        [value]: !prevStatus[category]?.[value],
      },
    }));
  }
  };

  return (
    <div className='mainFilterDiv'>
      <div className='filterDiv1'>
        <h2 className='mainFilterHeading'>Filter By</h2>
        <button className='resetFilterButton' onClick={resetClick}>Reset Filters</button>
      </div>

      {FilterList.map((item, key) => (
        <div className="filterDivs" key={key}>
          <span className="filterHeadings">{Object.keys(item)[0]}</span>
          {((Object.keys(item)[0] === 'Age')||(Object.keys(item)[0] === 'Disability Percentage')) ? (
            <SelectComponent
              options={item[Object.keys(item)[0]]}
              value={checkboxStatus[Object.keys(item)[0]] || ''}
              onChange={(value) => handleCheckboxChange(Object.keys(item)[0], value)}
            />
          ) : (item[Object.keys(item)[0]].map((value, index) => (
            <CheckBoxComponent
              key={index}
              value={value}
              checked={checkboxStatus[Object.keys(item)[0]]?.[value] || false}
              onChange={() => handleCheckboxChange(Object.keys(item)[0], value)}
            />
          )))}
        </div>
      ))}
    </div>
  )
}