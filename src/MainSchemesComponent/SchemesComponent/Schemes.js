import React, { useState } from 'react'
import Scheme from './Scheme'
import "./Schemes.css"
import SchemeTable from './SchemeTable'


export default function Schemes() {


    const [SchemeList,setSchemeList] = useState([
        {
            department: "Social Justice & Empowerment (Directorate for the Empowerment of SCs, OBCs, Minorities & the Specially Abled) ",
            name: "Swaran Jayanti Ashray Yojana",
            description: "Under this scheme Housing subsidy is provided to the eligible persons belonging to the Scheduled Castes , Scheduled Tribes and Other Backward Classes, whose houses have totally been damaged and are liable to collapse or have collapsed and warrant immediate repairs, who do not own any house of their own to live in but have got house-site for construction of new house and who live in a signle room and share it with their cattle.",
            eligibility: "10+2",
            feeAndPayment: "Zero",
            documentsRequired: "Aadhar Card",
            submitTo: "Social Justice Department",
            link:"https://kalyan.hp.gov.in"
        },
        {
            department: "Department of Technical Education",
            name: "National Apprenticeship Promotion Scheme (NAPS)",
            description: "The Apprentices Act, 1961(amended from time to time) was enacted with the objective of regulating the programme of training of apprentices in the industry by utilizing the facilities available therein for imparting on-the-job training. The Act makes it obligatory for employers in specified industries to engage apprentices in designated trades to impart Apprenticeship Training on the job in dustry to youth and person having National Trade certificate issued by National Council for Vocational Training (NCVT) to develop skilled manpower for the industry. Apprentices get an opportunity of undergoing 'on the job' training and are exposed to real working conditions. They get a chance to work on advanced machines and equipments, industry specific best practices and learn more about their field. Apprentices become skilled workers once they have acquired the knowledge and skills in a trade or occupation, which help them in getting wage or self - employment. In addition, apprentices get stipend at the prescribed rates during the training. One can undergo apprenticeship training in any industry/ establishments in the Central/State Public Sector or Private Sector, where apprenticeship seats are available. All the process of the NAPS is online and the web portal has also been changed in April 2020 i.e. apprenticeshipindia.gov.in.",
            eligibility: "10+2",
            feeAndPayment: "NA",
            documentsRequired: "Aadhar Card",
            submitTo: "Department of Technical Education",
            link:"https://www.apprenticeshipindia.gov.in"
        },
        {
            department: "HPSEBL",
            name: "Mukhya Mantri Roshni Yojna",
            description: "Mukhya Mantri Roshni Yojana (MMRY) was launched during the FY 2019-20 in pursuance to the announcement made by the Hon’ble Chief Minister, Himachal Pradesh in his budget speech for FY 2019-20. A target for releasing of 17,550 electricity connections to the poor families of the State was envisaged in the scheme, cost of which was worked out as Rs. 13.16 crore. The budget for implementation of the scheme was provided by the GoHP.",
            eligibility: "NA",
            feeAndPayment: "Zero",
            documentsRequired: "Aadhar Card",
            submitTo: "State Department",
            link:"https://www.hpseb.in/irj/go/km/docs/internet/New_Website/Pages/Home.html"
        },
    ]);


    const [schemeTableDisplay, setschemeTableDisplay] = useState(Array(SchemeList.length).fill(null))
    const buttonHandleClick = (key) => {
        setschemeTableDisplay((prevState) => {
            const updatedDisplay = [...prevState];
            updatedDisplay[key] = !updatedDisplay[key];
            return updatedDisplay;
        });
    };

    const [currentPage, setCurrentPage] = useState(1)
    const schemesPerPage = 5
    const lastIndex = currentPage * schemesPerPage
    const firstIndex = lastIndex - schemesPerPage
    const records = SchemeList.slice(firstIndex, lastIndex)
    const npages = Math.ceil(SchemeList.length / schemesPerPage)
    const numbers = [...Array(npages + 1).keys()].slice(1)

    function prePage() {
        if (currentPage != 1) {
            setCurrentPage(currentPage - 1)
        }
    }
    function nextPage() {
        if (currentPage != npages) {
            setCurrentPage(currentPage + 1)
        }
    }
    function changeCurrentPage(id) {
        setCurrentPage(id)
    }

    return (
        <div className='outerMainSchemesDiv'>
            {records.map((item, key) => (
                <div className='mainSchemesDiv' key={key}>
                    <Scheme departmentName={item[Object.keys(item)[0]]} schemeName={item[Object.keys(item)[1]]} schemeDescription={item[Object.keys(item)[2]]} buttonClicked={() => buttonHandleClick(key)} />

                    <SchemeTable displayTable={schemeTableDisplay[key]} eligibility={item[Object.keys(item)[3]]} feeAndPayment={item[Object.keys(item)[4]]} documentsRequired={item[Object.keys(item)[5]]} submitTo={item[Object.keys(item)[6]]} url={item[Object.keys(item)[7]]} />
                </div>
            ))
            }

            <div className='schemePaginationDiv'>
                <nav>
                    <ul className='schemePagination'>
                        <li className='schemePageItem' onClick={prePage}>
                            <a className='schemePageAnchorTags' href='#'>&#8249;</a>
                        </li>
                        {
                            numbers.map((n, i) => (
                                <li className={`schemePageNumber ${currentPage===n? 'currentSchemePageNumber' : ''}`}>
                                    <a className={`schemePageNumberAnchorTags ${currentPage===n? 'currentschemePageNumberAnchorTag' : ''}`} href='#' onClick={() => changeCurrentPage(n)}>{n}</a>
                                </li>
                            ))
                        }
                        <li className='schemePageItem'>
                            <a className='schemePageAnchorTags' href='#' onClick={nextPage}>&#8250;</a>
                        </li>
                    </ul>
                </nav>
            </div>
            {/* {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'} */}
        </div>
    )
}