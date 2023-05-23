import React from 'react'
import "./SchemeTable.css"

export default function SchemeTable({ displayTable, eligibility, feeAndPayment, documentsRequired, submitTo, url }) {
  if (!displayTable) {
    return null;
  }
  else {
    return (
      <div className='schemeTableDiv'>
        <table className='schemeTable'>
          <tbody>
            <tr className='schemeTableRow'>
              <td className='schemeTableElements'>Eligibility Criteria</td>
              <td className='schemeTableElements'>Fee and Payment</td>
              <td className='schemeTableElements'>Documents Required</td>
              <td className='schemeTableElements'>Submit to</td>
              <td className='schemeTableElements'>Apply now</td>
            </tr>
            <tr className='schemeTableRow'>
              <td className='schemeTableElements'>{eligibility}</td>
              <td className='schemeTableElements'>{feeAndPayment}</td>
              <td className='schemeTableElements'>{documentsRequired}</td>
              <td className='schemeTableElements'>{submitTo}</td>
              <td className='schemeTableElements'><a href={url} className='schemeApply' target='blank'>Click Here to Apply</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}


