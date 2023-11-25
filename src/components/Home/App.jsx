import React, { useState } from 'react';
import './App.css';

import patientsData from '../../dummyData.js';


function App() {
    const [isSearchFocused, setIsSearchFocused] = useState(false);

    function Singlepatientdata({ data }) {
        return (
            <div className='singleData d-flex'>
                <p style={{ flex: 3 }}>{data.patientName}</p>
                <p style={{ flex: 1 }}>{data.patientrupees}</p>
                <p style={{ flex: 1 }}>{data.patientday}</p>
                <p style={{ flex: 1 }}>{data.patientmonth}</p>
                <p style={{ flex: 1 }}>{data.patientyear}</p>
            </div>
        )
    }

    return (
        <div className="homePage">
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-2" id="staticBackdropLabel">Add Patient Data</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body add-patientData-body">
                            <div className='patientNamediv d-flex justify-content-center'>
                                <h4>Patient Name:</h4>
                                <input className='form-control' placeholder='Please enter patient Name' type="text" />
                            </div>
                            <div className='patientrupeesdiv d-flex justify-content-center'>
                                <h4>Patient Money</h4>
                                <input className='form-control' placeholder='Please enter patient Money' type="text" />
                            </div>
                            <div className='patientdescriptiondiv d-flex justify-content-center'>
                                <h4>Patient description:</h4>
                                <div class="form-floating divofpatientdescription">
                                    <textarea class="form-control textareaofaddpatientdata" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                                    <label for="floatingTextarea">Patient Description</label>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Add Data</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="homeWrapper">
                <div className="headingArea d-flex align-items-center">
                    <h3 style={{ color: '#6f11f5' }}> All Patients</h3>
                    <button className='addPtnBtn' data-bs-toggle="modal" data-bs-target="#staticBackdrop">Add Patient</button>
                </div>

                <div className={`searchDiv d-flex ${isSearchFocused ? 'focused' : ''}`}>
                    <input
                        className='searchInputOfPatient'
                        type="text"
                        placeholder="Search"
                        onFocus={() => setIsSearchFocused(true)}
                        onBlur={() => setIsSearchFocused(false)}
                    />
                    <button className='searchBtnOfPatient'><i className="fa-solid fa-magnifying-glass me-1"></i> Search</button>
                </div>

                <div className="allProducts my-4 px-4 py-3">
                    <div className="navofPatientData d-flex mb-3">
                        <h5 style={{ flex: 3 }}>Name</h5>
                        <h5 style={{ flex: 1 }}>Money</h5>
                        <h5 style={{ flex: 1 }}>Day</h5>
                        <h5 style={{ flex: 1 }}>Month</h5>
                        <h5 style={{ flex: 1 }}>Year</h5>
                    </div>
                    {
                        patientsData.map((x, i) => <Singlepatientdata key={i} data={x} />)
                    }
                </div>
            </div>
        </div>
    );
}

export default App;


// <!-- Button trigger modal -->
// <button type="button" className"btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
//   Launch static backdrop modal
// </button>

// <!-- Modal -->
// <div className"modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
//   <div className"modal-dialog">
//     <div className"modal-content">
//       <div className"modal-header">
//         <h1 className"modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
//         <button type="button" className"btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//       </div>
//       <div className"modal-body">
//         ...
//       </div>
//       <div className"modal-footer">
//         <button type="button" className"btn btn-secondary" data-bs-dismiss="modal">Close</button>
//         <button type="button" className"btn btn-primary">Understood</button>
//       </div>
//     </div>
//   </div>
// </div>