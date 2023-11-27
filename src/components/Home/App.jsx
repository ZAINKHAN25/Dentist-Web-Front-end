/* global $ */

import React, { useEffect, useState } from 'react'
import './App.css';

// import patientsData from '../../dummyData.js';
import axios from 'axios';
import myApi from '../../myApi.js';
import { useNavigate } from 'react-router-dom';


function App() {

    const navigateTo = useNavigate()
    var loginLocalStorage = JSON.parse(localStorage.getItem('logintoken'));

    let [patientsData, setpatientsData] = useState([])
    let [cuurentSinglePatient, setcuurentSinglePatient] = useState([]);
    let [patientsNameInput, setpatientsNameInput] = useState('')
    let [patientdescriptionInput, setpatientdescriptionInput] = useState('')
    let [patientrupeesInput, setpatientrupeesInput] = useState('')
    let [searchInput, setsearchInput] = useState('')
    let [isSearchFocused, setIsSearchFocused] = useState(false);
    let [errTxt, seterrTxt] = useState();


    useEffect(() => {
        gettingdata();
        if (!loginLocalStorage) {
            navigateTo('login')
        }

    }, [])



    async function gettingdata() {
        try {
            var res = await axios.post(`${myApi}ptnt-data`, { logintoken: loginLocalStorage })
            var data = await res.data.data.allPatientData;

            setpatientsData(data)

        } catch (error) {
            console.log(error);
        }
    }

    function Singlepatientdata({ data }) {
        return (
            <div onClick={() => { setcuurentSinglePatient(data) }} className='singleData d-flex' data-bs-toggle="modal" data-bs-target="#SinglePatient">
                <p style={{ flex: 3 }}>{data.patientName}</p>
                <p style={{ flex: 1 }}>{data.patientrupees}</p>
                <p style={{ flex: 1 }}>{data.patientday}</p>
                <p style={{ flex: 1 }}>{data.patientmonth}</p>
                <p style={{ flex: 1 }}>{data.patientyear}</p>
            </div>
        )
    }


    async function addPatientData() {
        const date = new Date();

        if (patientsNameInput === "" || patientdescriptionInput === "" || patientrupeesInput === "") {
            seterrTxt("Please fill out the form completely")
            setTimeout(() => {
                seterrTxt('')
            }, 4000)
        } else {
            try {
                var res = await axios.post(`${myApi}add-ptnt-data`, {
                    patientName: patientsNameInput,
                    patientdescription: patientdescriptionInput,
                    patientrupees: patientrupeesInput,
                    logintoken: loginLocalStorage,
                    patientday: date.getDay(),
                    patientmonth: date.getMonth(),
                    patientyear: date.getFullYear(),
                });

                var resTwo = await res.data;
                $('#staticBackdrop').modal('hide');
                gettingdata()

            } catch (error) {
                console.log(error);
            }
        }
    }

    async function seacrhFoo() {
        try {

            var res = await axios.post(`${myApi}search-patient`, { logintoken: loginLocalStorage, search: searchInput });
            var restwo = await res.data.result;
            setpatientsData(restwo);
        } catch (error) {
            console.log(error);
            if (searchInput === '') {
                gettingdata();
            } else {
                setpatientsData([]);
            }
        }
    }


    return (
        <div className="homePage">


            {/* modal of Add data */}
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-2" id="staticBackdropLabel">Add Patient Data</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body add-patientData-body">
                            <div className='patientNamediv d-flex justify-content-center'>
                                <h4>Patient Name:</h4>
                                <input value={patientsNameInput} onChange={(e) => setpatientsNameInput(e.target.value)} className='form-control' placeholder='Please enter patient Name' type="text" />
                            </div>
                            <div className='patientrupeesdiv d-flex justify-content-center'>
                                <h4>Patient Money</h4>
                                <input value={patientrupeesInput} onChange={(e) => setpatientrupeesInput(e.target.value)} className='form-control' placeholder='Please enter patient Money' type="number" />
                            </div>
                            <div className='patientdescriptiondiv d-flex justify-content-center'>
                                <h4>Patient description:</h4>
                                <div className="form-floating divofpatientdescription">
                                    <textarea value={patientdescriptionInput} onChange={(e) => setpatientdescriptionInput(e.target.value)} className="form-control textareaofaddpatientdata" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                                    <label htmlFor="floatingTextarea">Patient Description</label>
                                </div>
                            </div>
                            <div style={{ color: 'red' }}>
                                {errTxt}
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={addPatientData}>Add Data</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* modal of single patient */}
            <div className="modal fade" id="SinglePatient" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-3" id="staticBackdropLabel">{cuurentSinglePatient.patientName}'s data</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div className="modal-body singlePatientDataModalBody d-flex flex-column">
                            <span>Patient Name: <span className='mainWordsinSPDMB'>{cuurentSinglePatient.patientName}</span></span>
                            <span>Patient Money: <span className='mainWordsinSPDMB'>{cuurentSinglePatient.patientrupees}</span></span>
                            <span>Patient Description: <span className='mainWordsinSPDMB'>{cuurentSinglePatient.patientdescription}</span></span>
                            <span>Date: <span className='mainWordsinSPDMB'>{cuurentSinglePatient.patientmonth}/{cuurentSinglePatient.patientday}/{cuurentSinglePatient.patientyear}</span></span>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="homeWrapper">
                <div className="headingArea d-flex align-items-center">
                    <h3 style={{ color: '#6f11f5' }}> All Patients</h3>
                    <div>
                        <button className='addPtnBtn' data-bs-toggle="modal" data-bs-target="#staticBackdrop">Add Patient</button>
                        <button className='searchBtnOfPatient ms-3' onClick={() => {
                            localStorage.setItem('logintoken', JSON.stringify(""));
                            navigateTo('/login')
                        }}> Logout </button>
                    </div>
                </div>

                <div className={`searchDiv d-flex ${isSearchFocused ? 'focused' : ''}`}>
                    <input
                        className='searchInputOfPatient'
                        type="text"
                        placeholder="Search"
                        onFocus={() => setIsSearchFocused(true)}
                        onBlur={() => setIsSearchFocused(false)}
                        onChange={(e) => setsearchInput(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                seacrhFoo();
                            }
                        }}
                        value={searchInput}
                    />

                    <button className='searchBtnOfPatient' onClick={seacrhFoo}><i className="fa-solid fa-magnifying-glass me-1"></i> Search</button>


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
                        !patientsData.length ? "No data!" : patientsData.map((x, i) => <Singlepatientdata key={i} data={x} />)
                    }
                </div>
            </div>
        </div>
    );
}

export default App;
