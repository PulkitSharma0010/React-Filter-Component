import React, { useState } from 'react'
import Scheme from './Scheme'
import "./Schemes.css"
import SchemeTable from './SchemeTable'


export default function Schemes({ filter, schemeContent, val, resetval, resetfilter }) {

    
    const [SchemeList, setSchemeList] = useState([
        // {
        //     department: "Social Justice & Empowerment (Directorate for the Empowerment of SCs, OBCs, Minorities & the Specially Abled) ",
        //     name: "Swaran Jayanti Ashray Yojana",
        //     description: "Under this scheme Housing subsidy is provided to the eligible persons belonging to the Scheduled Castes , Scheduled Tribes and Other Backward Classes, whose houses have totally been damaged and are liable to collapse or have collapsed and warrant immediate repairs, who do not own any house of their own to live in but have got house-site for construction of new house and who live in a signle room and share it with their cattle.",
        //     eligibility: "10+2",
        //     feeAndPayment: "Zero",
        //     documentsRequired: "Aadhar Card",
        //     submitTo: "Social Justice Department",
        //     link: "https://kalyan.hp.gov.in"
        // },
        // {
        //     department: "Department of Technical Education",
        //     name: "National Apprenticeship Promotion Scheme (NAPS)",
        //     description: "The Apprentices Act, 1961(amended from time to time) was enacted with the objective of regulating the programme of training of apprentices in the industry by utilizing the facilities available therein for imparting on-the-job training. The Act makes it obligatory for employers in specified industries to engage apprentices in designated trades to impart Apprenticeship Training on the job in dustry to youth and person having National Trade certificate issued by National Council for Vocational Training (NCVT) to develop skilled manpower for the industry. Apprentices get an opportunity of undergoing 'on the job' training and are exposed to real working conditions. They get a chance to work on advanced machines and equipments, industry specific best practices and learn more about their field. Apprentices become skilled workers once they have acquired the knowledge and skills in a trade or occupation, which help them in getting wage or self - employment. In addition, apprentices get stipend at the prescribed rates during the training. One can undergo apprenticeship training in any industry/ establishments in the Central/State Public Sector or Private Sector, where apprenticeship seats are available. All the process of the NAPS is online and the web portal has also been changed in April 2020 i.e. apprenticeshipindia.gov.in.",
        //     eligibility: "10+2",
        //     feeAndPayment: "NA",
        //     documentsRequired: "Aadhar Card",
        //     submitTo: "Department of Technical Education",
        //     link: "https://www.apprenticeshipindia.gov.in"
        // },
        // {
        //     department: "HPSEBL",
        //     name: "Mukhya Mantri Roshni Yojna",
        //     description: "Mukhya Mantri Roshni Yojana (MMRY) was launched during the FY 2019-20 in pursuance to the announcement made by the Hon’ble Chief Minister, Himachal Pradesh in his budget speech for FY 2019-20. A target for releasing of 17,550 electricity connections to the poor families of the State was envisaged in the scheme, cost of which was worked out as Rs. 13.16 crore. The budget for implementation of the scheme was provided by the GoHP.",
        //     eligibility: "NA",
        //     feeAndPayment: "Zero",
        //     documentsRequired: "Aadhar Card",
        //     submitTo: "State Department",
        //     link: "https://www.hpseb.in/irj/go/km/docs/internet/New_Website/Pages/Home.html"
        // },

        {
            "id": 703,
            "dept_id": "Urban Development (UD)",
            "name_of_scheme": "Online issuance of Trade License",
            "act_rule_details": "HP Municipality (Grant of license for use of  Premises  and storage of Articles in  Premises ) Byelaws, 2020",
            "scheme_details": "",
            "objective": "The facility  for Online issuance of Trade License in Urban Local Bodies.",
            "description": null,
            "state_centre": "State",
            "sponsored_status": "Both",
            "beneficiaries": "General Public",
            "quantum_of_assistance": "",
            "scheme_start_date": null,
            "scheme_end_date": null,
            "any_key_information": "online Trade License issuance. ",
            "gender": "All",
            "marital_status": "All",
            "category": "All",
            "exserviceman": "No",
            "himachali_bonafide": "No",
            "qualification": "All",
            "age": "Above 18",
            "min_age": "18",
            "max_age": null,
            "disability": "All",
            "address_specific": "Both",
            "poverty_category": "NA",
            "minority_community": "All",
            "occupaton": "All",
            "annual_income": "NA",
            "timelines": "https://emerginghimachal.hp.gov.in//themes/backend/uploads/kya/sid/PSG_Trade%20License_Page%203531_MC.pdf",
            "procedure_info": null,
            "fee": null,
            "is_timeline_HPPSG_act_2011": "Yes",
            "application_mode": null,
            "link_apply": "https://edistrict.hp.gov.in/pages/staticSite/UdServices.xhtml",
            "nodal_officer_details": "",
            "any_key_information_elegibility": "General Public.",
            "any_key_information_other_information": "Online Trade License",
            "documents_checklist": null,
            "min_annual_income": "0",
            "max_annual_income": "0"
          },

    ]);

    // useEffect(() => {
    //     console.log("Fetching data from the API...");
    //     fetch('<API_URL>')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log("Data received:", data);
    //             if (Array.isArray(data.data)) {
    //                 setSchemeList(data.data);
    //             } else {
    //                 console.error("Invalid data format:", data);
    //             }
    //         })
    //         .catch(error => console.error("Error:", error));
    // }, []);


    // useEffect(() => {
    //     fetch('https://himstaging1.hp.gov.in/schemes/api/schemes/distinctGenders')
    //         .then(response => response.json())
    //         .then(data => setSchemeList(data))
    //         .catch(error => console.error(error));
    // }, []);

    // useEffect(() => {
    //     fetch('https://himstaging1.hp.gov.in/schemes/api/distinctGenders')
    //       .then(response => response.json())
    //       .then(json => setSchemeList(json))
    //       .catch(error => console.error(error));
    //   }, []);

    // useEffect(() => {
    //     console.log("Fetching data from the API...");
    //     fetch('https://himstaging1.hp.gov.in/schemes/api/schemes/distinctGenders')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log("Data received:", data);
    //             if (Array.isArray(data.data)) {
    //                 setSchemeList(data.data);
    //             } else {
    //                 console.error("Invalid data format:", data);
    //             }
    //         })
    //         .catch(error => console.error("Error:", error));
    // }, []);

    //Change:

    //    let filteredSchemes=[];
    let filteredSchemes = filter;
    console.log("Filter Schemes is: ",filteredSchemes)
    console.log("out of map")

    filteredSchemes.map((item, key) => {        
        if (Object.keys(item)[0].length >= 1) {
          console.log("in Map");
          
          fetch('https://himstaging1.hp.gov.in/schemes/api/schemes/distinctGenders')
            .then(response => response.json())
            .then(data => {
              console.log("Data received:", data);
              if (Array.isArray(data.data)) {
                setSchemeList(data.data);
              } else {
                console.error("Invalid data format:", data);
              }
            })
            .catch(error => console.error("Error:", error));
            resetval(null);
        }
      });
      

    // filteredSchemes.map((item, key) => (
    //     console.log("Array len is: ",Object.keys(item).length),
    //     () => {
    //         console.log("in map")

    //         console.log(Object.keys(item).length);
    //         if (Object.keys(item)[0].length >= 1) {
    //             console.log("in MAp");

    //             fetch('https://himstaging1.hp.gov.in/schemes/api/schemes/distinctGenders')
    //                 .then(response => response.json())
    //                 .then(data => {
    //                     console.log("Data received:", data);
    //                     if (Array.isArray(data.data)) {
    //                         setSchemeList(data.data);
    //                     } else {
    //                         console.error("Invalid data format:", data);
    //                     }
    //                 })
    //                 .catch(error => console.error("Error:", error));
    //             resetval(null);
    //         }

    //     }
    // ))


    // const updateSchemeList = (updatedSchemes) => {
    //     setSchemeList(updatedSchemes);
    // }

    // if (filter == "Female") {
    // fetch('https://himstaging1.hp.gov.in/schemes/api/schemes/distinctCategory')
    //         .then(response => response.json())
    //         .then(data => {
    //             // console.log("Data received:", data);
    //             if (Array.isArray(data.data)) {


    //                 filteredSchemes = filteredSchemes.concat(data.data);
    //                 updateSchemeList(filteredSchemes);
    //             } else {
    //                 // console.error("Invalid data format:", data);
    //             }
    //         })
    //         .catch(error => console.error("Error:", error));
    //     resetfilter(null);
    // }

    // if (filter == "Male") {
    //     console.log("Fetching data from the API...");
    //     fetch('https://himstaging1.hp.gov.in/schemes/api/schemes/distinctGenders')
    //         .then(response => response.json())
    //         .then(data => {
    //             // console.log("Data received:", data);
    //             if (Array.isArray(data.data)) {
    //                 filteredSchemes = filteredSchemes.concat(data.data);
    //                 updateSchemeList(filteredSchemes);
    //             } else {
    //                 console.error("Invalid data format:", data);
    //             }
    //         })
    //         .catch(error => console.error("Error:", error));
    //     resetfilter(null);
    // }

    if (val != null) {
        console.log("Fetching data from the API...");
        // fetch('https://himstaging1.hp.gov.in/schemes/api/schemes/allSchemes')
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log("Data received:", data);
        //         if (Array.isArray(data.data)) {
        //             setSchemeList(data.data);
        //         } else {
        //             console.error("Invalid data format :", data);
        //         }
        //     })
        //     .catch(error => console.error("Error:", error));
        fetch('https://himstaging1.hp.gov.in/schemes/api/schemes/allSchemes')
            .then(response => response.json())
            .then(data => {
              console.log("Data received:", data);
              if (Array.isArray(data.data.content)) {
                setSchemeList(data.data.content);
              } else {
                console.error("Invalid data format:", data);
              }
            })
            .catch(error => console.error("Error:", error));
        resetval(null);
    }
    // setSchemeList(schemeContent);


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
                <div className='mainSchemesDiv' key={item.id}>
                    <Scheme departmentName={item.dept_id} schemeName={item.name_of_scheme} schemeDescription={item.objective} schemeAge={item.min_age} schemeBeneficiaries={item.beneficiaries} schemeStateCenter={item.state_centre} schemeGender={item.gender} schemeOccupation={item.occupaton} buttonClicked={() => buttonHandleClick(item.id)} schemePDF={item.timelines} />

                    <SchemeTable displayTable={schemeTableDisplay[item.id]} qualification={item.qualification} feeAndPayment={item.fee} disability={item.disability} povertyCategory={item.poverty_category} url={item.link_apply} schemePDF={item.timelines} />
                </div>
            ))
            }

            <div className='schemePaginationDiv'>
                <nav>
                    <ul className='schemePagination'>
                        <li className='schemePageItem' onClick={prePage} >
                            <a className='schemePageAnchorTags' href='#'>&#8249;</a>
                        </li>
                        {
                            numbers.map((n, i) => (
                                <li key={i} className={`schemePageNumber ${currentPage === n ? 'currentSchemePageNumber' : ''}`}>
                                    <a className={`schemePageNumberAnchorTags ${currentPage === n ? 'currentschemePageNumberAnchorTag' : ''}`} href='#' onClick={() => changeCurrentPage(n)}>{n}</a>
                                </li>
                            ))
                        }
                        <li className='schemePageItem'>
                            <a className='schemePageAnchorTags' href='#' onClick={nextPage}>&#8250;</a>
                        </li>
                    </ul>
                </nav>
            </div>
            {/* {SchemeList ? <pre>{JSON.stringify(SchemeList, null, 2)}</pre> : 'Loading...'} */}
        </div>
    )
}