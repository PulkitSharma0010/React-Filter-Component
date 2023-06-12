import React, { useState, useEffect, useMemo } from 'react'
import Scheme from './Scheme'
import "./Schemes.css"
import SchemeTable from './SchemeTable'


export default function Schemes({ filter, val, resetval, resetfilter, filClick, updatefilClick }) {

  const [SchemeList, setSchemeList] = useState([
    // {
    //   "id": 703,
    //   "dept_id": "Urban Development (UD)",
    //   "name_of_scheme": "Online issuance of Trade License",
    //   "act_rule_details": "HP Municipality (Grant of license for use of  Premises  and storage of Articles in  Premises ) Byelaws, 2020",
    //   "scheme_details": "",
    //   "objective": "The facility  for Online issuance of Trade License in Urban Local Bodies.",
    //   "description": null,
    //   "state_centre": "State",
    //   "sponsored_status": "Both",
    //   "beneficiaries": "General Public",
    //   "quantum_of_assistance": "",
    //   "scheme_start_date": null,
    //   "scheme_end_date": null,
    //   "any_key_information": "online Trade License issuance. ",
    //   "gender": "All",
    //   "marital_status": "All",
    //   "category": "All",
    //   "exserviceman": "No",
    //   "himachali_bonafide": "No",
    //   "qualification": "All",
    //   "age": "Above 18",
    //   "min_age": "18",
    //   "max_age": null,
    //   "disability": "All",
    //   "address_specific": "Both",
    //   "poverty_category": "NA",
    //   "minority_community": "All",
    //   "occupaton": "All",
    //   "annual_income": "NA",
    //   "timelines": "https://emerginghimachal.hp.gov.in//themes/backend/uploads/kya/sid/PSG_Trade%20License_Page%203531_MC.pdf",
    //   "procedure_info": null,
    //   "fee": null,
    //   "is_timeline_HPPSG_act_2011": "Yes",
    //   "application_mode": null,
    //   "link_apply": "https://edistrict.hp.gov.in/pages/staticSite/UdServices.xhtml",
    //   "nodal_officer_details": "",
    //   "any_key_information_elegibility": "General Public.",
    //   "any_key_information_other_information": "Online Trade License",
    //   "documents_checklist": null,
    //   "min_annual_income": "0",
    //   "max_annual_income": "0"
    // },

  ]);

  let [pageCount,setPageCount]=useState(0);

  useEffect(() => {
    fetch('https://himstaging1.hp.gov.in/schemes/api/schemes/allSchemes?page=1&size=10')
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data.data.content)) {
          setSchemeList(data.data.content);
          setPageCount(data.data.totalPages);
        } else {
          console.error('Invalid data format:', data);
        }
      })
      .catch(error => console.error('Error:', error));
  }, []);

  const [filteredSchemes, setFilteredSchemes] = useState([]);

  useMemo(() => {
    setFilteredSchemes(filter);
    updatefilClick(false);
    // return filter;
  }, [filter])

  console.log(filteredSchemes)
  useEffect(() => {

    console.log("Inside Fetch ")

    const url = 'https://himstaging1.hp.gov.in/schemes/api/schemes/allSchemes';  // Replace with your API endpoint URL

    const data = {
      filterList: filteredSchemes  // Include the FilterList as a property in an object
    };
    
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify(data),  // Convert the request data to a JSON string
    };
    
    fetch(url, options)
      .then(response => response.json())
      .then(result => {
        // console.log(result);
      })
      .catch(error => {
        console.error("Error: is....", error);
      });
  }, [filteredSchemes])

  if (val != null) {
    fetch('https://himstaging1.hp.gov.in/schemes/api/schemes/allSchemes?page=1&size=10')
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data.data.content)) {
          setSchemeList(data.data.content);
        } else {
          console.error("Invalid data format:", data);
        }
      })
      .catch(error => console.error("Error:", error));
    resetval(null);
    resetfilter([]);
  }

  const [schemeTableDisplay, setschemeTableDisplay] = useState(Array(SchemeList.length).fill(null))
  const buttonHandleClick = (key) => {
    setschemeTableDisplay((prevState) => {
      const updatedDisplay = [...prevState];
      updatedDisplay[key] = !updatedDisplay[key];
      return updatedDisplay;
    });
  };

  const [currentPage, setCurrentPage] = useState(1)
  const schemesPerPage = 10
  // const lastIndex = currentPage * schemesPerPage
  // const firstIndex = lastIndex - schemesPerPage
  const npages = pageCount;
  
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

  useEffect(()=>{
    let str=`https://himstaging1.hp.gov.in/schemes/api/schemes/allSchemes?page=${currentPage}&size=10`
    fetch(str)
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data.data.content)) {
          setSchemeList(data.data.content);
        } else {
          console.error('Invalid data format:', data);
        }
      })
      .catch(error => console.error('Error:', error));
  },[currentPage]);



  return (
    <div className='outerMainSchemesDiv'>
              {SchemeList.map((item, key) => (

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
    </div>
  )
}