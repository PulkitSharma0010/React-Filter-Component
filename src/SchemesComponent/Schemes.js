import React from 'react'
import Scheme from './Scheme'
import "./Schemes.css"

const SchemeList = [
    {
        department: "Social Justice & Empowerment (Directorate for the Empowerment of SCs, OBCs, Minorities & the Specially Abled) ",
        name: "Swaran Jayanti Ashray Yojana",
        description: "Under this scheme Housing subsidy is provided to the eligible persons belonging to the Scheduled Castes , Scheduled Tribes and Other Backward Classes, whose houses have totally been damaged and are liable to collapse or have collapsed and warrant immediate repairs, who do not own any house of their own to live in but have got house-site for construction of new house and who live in a signle room and share it with their cattle."
    },
    {
        department: "Social Justice & Empowerment (Directorate for the Empowerment of SCs, OBCs, Minorities & the Specially Abled) ",
        name: "Swaran Jayanti Ashray Yojana",
        description: "Under this scheme Housing subsidy is provided to the eligible persons belonging to the Scheduled Castes , Scheduled Tribes and Other Backward Classes, whose houses have totally been damaged and are liable to collapse or have collapsed and warrant immediate repairs, who do not own any house of their own to live in but have got house-site for construction of new house and who live in a signle room and share it with their cattle."
    },
    {
        department: "Social Justice & Empowerment (Directorate for the Empowerment of SCs, OBCs, Minorities & the Specially Abled) ",
        name: "Swaran Jayanti Ashray Yojana",
        description: "Under this scheme Housing subsidy is provided to the eligible persons belonging to the Scheduled Castes , Scheduled Tribes and Other Backward Classes, whose houses have totally been damaged and are liable to collapse or have collapsed and warrant immediate repairs, who do not own any house of their own to live in but have got house-site for construction of new house and who live in a signle room and share it with their cattle."
    },
    {
        department: "Social Justice & Empowerment (Directorate for the Empowerment of SCs, OBCs, Minorities & the Specially Abled) ",
        name: "Swaran Jayanti Ashray Yojana",
        description: "Under this scheme Housing subsidy is provided to the eligible persons belonging to the Scheduled Castes , Scheduled Tribes and Other Backward Classes, whose houses have totally been damaged and are liable to collapse or have collapsed and warrant immediate repairs, who do not own any house of their own to live in but have got house-site for construction of new house and who live in a signle room and share it with their cattle."
    },
    
    {
        department: "Social Justice & Empowerment (Directorate for the Empowerment of SCs, OBCs, Minorities & the Specially Abled) ",
        name: "Swaran Jayanti Ashray Yojana",
        description: "Under this scheme Housing subsidy is provided to the eligible persons belonging to the Scheduled Castes , Scheduled Tribes and Other Backward Classes, whose houses have totally been damaged and are liable to collapse or have collapsed and warrant immediate repairs, who do not own any house of their own to live in but have got house-site for construction of new house and who live in a signle room and share it with their cattle."
    },
    {
        department: "Social Justice & Empowerment (Directorate for the Empowerment of SCs, OBCs, Minorities & the Specially Abled) ",
        name: "Swaran Jayanti Ashray Yojana",
        description: "Under this scheme Housing subsidy is provided to the eligible persons belonging to the Scheduled Castes , Scheduled Tribes and Other Backward Classes, whose houses have totally been damaged and are liable to collapse or have collapsed and warrant immediate repairs, who do not own any house of their own to live in but have got house-site for construction of new house and who live in a signle room and share it with their cattle."
    },
    {
        department: "Social Justice & Empowerment (Directorate for the Empowerment of SCs, OBCs, Minorities & the Specially Abled) ",
        name: "Swaran Jayanti Ashray Yojana",
        description: "Under this scheme Housing subsidy is provided to the eligible persons belonging to the Scheduled Castes , Scheduled Tribes and Other Backward Classes, whose houses have totally been damaged and are liable to collapse or have collapsed and warrant immediate repairs, who do not own any house of their own to live in but have got house-site for construction of new house and who live in a signle room and share it with their cattle."
    },
    {
        department: "Social Justice & Empowerment (Directorate for the Empowerment of SCs, OBCs, Minorities & the Specially Abled) ",
        name: "Swaran Jayanti Ashray Yojana",
        description: "Under this scheme Housing subsidy is provided to the eligible persons belonging to the Scheduled Castes , Scheduled Tribes and Other Backward Classes, whose houses have totally been damaged and are liable to collapse or have collapsed and warrant immediate repairs, who do not own any house of their own to live in but have got house-site for construction of new house and who live in a signle room and share it with their cattle."
    },
    {
        department: "Social Justice & Empowerment (Directorate for the Empowerment of SCs, OBCs, Minorities & the Specially Abled) ",
        name: "Swaran Jayanti Ashray Yojana",
        description: "Under this scheme Housing subsidy is provided to the eligible persons belonging to the Scheduled Castes , Scheduled Tribes and Other Backward Classes, whose houses have totally been damaged and are liable to collapse or have collapsed and warrant immediate repairs, who do not own any house of their own to live in but have got house-site for construction of new house and who live in a signle room and share it with their cattle."
    },
]



export default function Schemes() {
    return (
        <div className='outerMainSchemesDiv'>
        {
            SchemeList.map((item, key) => (
                <div className='mainSchemesDiv'>
                    <Scheme departmentName={item[Object.keys(item)[0]]} schemeName={item[Object.keys(item)[1]]}schemeDescription={item[Object.keys(item)[2]]} />
                </div>
            ))
        }
        </div>
    )
}
