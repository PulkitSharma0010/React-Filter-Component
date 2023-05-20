import React, { useState } from 'react'
import Scheme from './Scheme'
import "./Schemes.css"
import SchemeTable from './SchemeTable'

const SchemeList = [
    {
        department: "Social Justice & Empowerment (Directorate for the Empowerment of SCs, OBCs, Minorities & the Specially Abled) ",
        name: "Swaran Jayanti Ashray Yojana",
        description: "Under this scheme Housing subsidy is provided to the eligible persons belonging to the Scheduled Castes , Scheduled Tribes and Other Backward Classes, whose houses have totally been damaged and are liable to collapse or have collapsed and warrant immediate repairs, who do not own any house of their own to live in but have got house-site for construction of new house and who live in a signle room and share it with their cattle.",
        eligibility: "10+2",
        feeAndPayment: "Zero",
        documentsRequired: "Adhar Card",
        submitTo: "State Department",
        link:"abc"
    },
    {
        department: "Social Justice & Empowerment (Directorate for the Empowerment of SCs, OBCs, Minorities & the Specially Abled) ",
        name: "Swaran Jayanti Ashray Yojana",
        description: "Under this scheme Housing subsidy is provided to the eligible persons belonging to the Scheduled Castes , Scheduled Tribes and Other Backward Classes, whose houses have totally been damaged and are liable to collapse or have collapsed and warrant immediate repairs, who do not own any house of their own to live in but have got house-site for construction of new house and who live in a signle room and share it with their cattle.",
        eligibility: "10+2",
        feeAndPayment: "Zero",
        documentsRequired: "Adhar Card",
        submitTo: "State Department",
        link:"abc"
    },
    {
        department: "ABC",
        name: "Swaran Jayanti Ashray Yojana",
        description: "Under this scheme Housing subsidy is provided to the eligible persons belonging to the Scheduled Castes , Scheduled Tribes and Other Backward Classes, whose houses have totally been damaged and are liable to collapse or have collapsed and warrant immediate repairs, who do not own any house of their own to live in but have got house-site for construction of new house and who live in a signle room and share it with their cattle.",
        eligibility: "10+2",
        feeAndPayment: "Zero",
        documentsRequired: "Adhar Card",
        submitTo: "State Department",
        link:"abc"
    },
]

export default function Schemes() {
    const [schemeTableDisplay, setschemeTableDisplay] = useState(Array(SchemeList.length).fill(null))
    const buttonHandleClick = (key) => {
        setschemeTableDisplay((prevState) => {
          const updatedDisplay = [...prevState];
          updatedDisplay[key] = !updatedDisplay[key];
          return updatedDisplay;
        });
      };
    return (
        <div className='outerMainSchemesDiv'>
            {
                SchemeList.map((item, key) => (
                    <div className='mainSchemesDiv' key={key}>
                        <Scheme departmentName={item[Object.keys(item)[0]]} schemeName={item[Object.keys(item)[1]]} schemeDescription={item[Object.keys(item)[2]]} buttonClicked={() => buttonHandleClick(key)} />

                        <SchemeTable displayTable={schemeTableDisplay[key]} eligibility={item[Object.keys(item)[3]]} feeAndPayment={item[Object.keys(item)[4]]} documentsRequired={item[Object.keys(item)[5]]} submitTo={item[Object.keys(item)[6]]} url={item[Object.keys(item)[7]]} />
                    </div>
                ))
            }
        </div>
    )
}