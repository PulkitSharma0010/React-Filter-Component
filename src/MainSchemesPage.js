import React from 'react'
import Filter from './FilterComponent/Filter'
import Schemes from './SchemesComponent/Schemes'
import "./MainSchemesPage.css"

export default function MainSchemesPage() {
  return (
    <div className='mainPage'>
      <Filter/>
      <Schemes/>
    </div>
  )
}
