import React, { useState } from 'react'
import Filter from './FilterComponent/Filter'
import Schemes from './SchemesComponent/Schemes'
import "./MainSchemesPage.css"

export default function MainSchemesPage() {

  const [FilterValue,setFilterValue]  =useState([]);
  const [updateFilterValsClick,setupdateFilterValsClick]=useState(false);
  const [resetVal,setResetVal]=useState(null);

  const handleFilterClick = (value) => {
      setFilterValue(value);
    };

    const filterClicked=(value)=>{
      setupdateFilterValsClick(value);
    }

  const resetSchemeContent=(val)=>{
    setResetVal(val);
  }

  return (
    <div className='mainPage'>
      <Filter  updatefilClick={filterClicked} filterArrayVal={FilterValue} resetFilters={handleFilterClick} resetContent={resetSchemeContent} onFilterClick={handleFilterClick}/>
      <Schemes filClick={updateFilterValsClick} updatefilClick={filterClicked} resetfilter={handleFilterClick} filter={FilterValue} resetval={resetSchemeContent} val={resetVal} />
    </div>
  )
}
