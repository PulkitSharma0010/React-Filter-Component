import React from 'react'

export default function CheckBoxComponent({value}) {
  return (
    <div>
      <input type="checkbox"/><span>{value}</span>
    </div>
  )
}
