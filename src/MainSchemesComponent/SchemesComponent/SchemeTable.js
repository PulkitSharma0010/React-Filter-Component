import React from 'react'
import "./SchemeTable.css"

export default function SchemeTable({ displayTable, qualification, feeAndPayment, disability, povertyCategory, url }) {

  let fee;
  if (feeAndPayment == null) {
    fee = "None";
  }
  else {
    fee = feeAndPayment;
  }

  let siteLink;
  if (url == (undefined || null)) {
    siteLink = "Not Available";
  }
  else {
    siteLink = url;
  }

  if (!displayTable) {
    return null;
  }
  else {
    if (siteLink == "Not Available") {
      return (
        <div className='schemeTableDiv'>
          <table className='schemeTable'>
            <tbody>
              <tr className='schemeTableRow'>
                <td className='schemeTableElements'>Qualification</td>
                <td className='schemeTableElements'>Fee and Payment</td>
                <td className='schemeTableElements'>Disability</td>
                <td className='schemeTableElements'>Poverty Category</td>
                <td className='schemeTableElements'>Apply now</td>
              </tr>
              <tr className='schemeTableRow'>
                <td className='schemeTableElements'>{qualification}</td>
                <td className='schemeTableElements'>{fee}</td>
                <td className='schemeTableElements'>{disability}</td>
                <td className='schemeTableElements'>{povertyCategory}</td>
                <td className='schemeTableElements'>{siteLink}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    }
    else {
      return (
        <div className='schemeTableDiv'>
          <table className='schemeTable'>
            <tbody>
              <tr className='schemeTableRow'>
                <td className='schemeTableElements'>Qualification</td>
                <td className='schemeTableElements'>Fee and Payment</td>
                <td className='schemeTableElements'>Disability</td>
                <td className='schemeTableElements'>Poverty Category</td>
                <td className='schemeTableElements'>Apply now</td>
              </tr>
              <tr className='schemeTableRow'>
                <td className='schemeTableElements'>{qualification}</td>
                <td className='schemeTableElements'>{fee}</td>
                <td className='schemeTableElements'>{disability}</td>
                <td className='schemeTableElements'>{povertyCategory}</td>
                <td className='schemeTableElementsApply'><a href={siteLink} target='blank' className='schemeApply'>Click Here to Apply</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    }
  }
}


