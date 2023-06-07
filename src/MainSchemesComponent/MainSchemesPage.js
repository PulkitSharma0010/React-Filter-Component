import React, { useState } from 'react'
import Filter from './FilterComponent/Filter'
import Schemes from './SchemesComponent/Schemes'
import "./MainSchemesPage.css"

export default function MainSchemesPage() {

  const [FilterValue,setFilterValue]  =useState([]);
  const [resetVal,setResetVal]=useState(null);

  // const handleFilterClick = (value) => {
  //   if(value=="Female"){
  //   setFilterValue("Female");}
  //   if(value=="Male"){
  //     setFilterValue("Male");
  //   }
  // };

  const handleFilterClick = (value) => {
      setFilterValue(value);
    };

  const resetSchemeContent=(val)=>{
    setResetVal(val);
  }
  const setResetNull=()=>{
    setResetVal(null);
  }
  const setResetFilter=()=>{
    setFilterValue(null);
  }

  return (
    <div className='mainPage'>
      <Filter  setContent={resetSchemeContent} onFilterClick={handleFilterClick}/>
      <Schemes resetfilter={setResetFilter} resetval={setResetNull} val={resetVal} filter={FilterValue} />
    </div>
  )
}
