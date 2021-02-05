import React from 'react'
import  '../css/patient_info.css'
import Syringe from '../images/syringe.png';

class PatientInfo extends React.Component{
  render(){
    return (
        <div className="body">
            <div className="container">
                <div className="row vacc-div">
                    <div className="col-12 col-sm-8 col-md-8 col-lg-6 mx-auto">
                        <div className="row">
                            <div className="col-6">
                                <div className="vaccine vaccine-1 text-center">
                                    <img src={Syringe} className="syringe-icon" alt=""/>
                                    <span>
                                        <h5 className="vacc-status">Vaccinated on</h5>
                                        <h5 className="vacc-date">05-03-2021</h5>
                                    </span>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="vaccine vaccine-2 text-center">
                                    <img src={Syringe} className="syringe-icon" alt=""/>
                                    <span>
                                        <h5 className="vacc-status">Dose 2</h5>
                                        <h5 className="vacc-date">To be vaccinated</h5>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>   
                <div className="row">
                    <div className="col-12 text-center">
                        <h1 className="patient-head">Fortiz Mohali</h1>
                    </div>
                    <div className="col-12 col-sm-8 col-md-8 col-lg-6 mx-auto">
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Name</span>
                            <span className="detail form-control">Anshit</span>
                        </div>
                        <span className="flex">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Gender</span>
                                <span className="detail form-control">Male</span>
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Age</span>
                                <span className="detail form-control">19</span>
                            </div>
                        </span> 
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Email</span>
                            <span className="detail form-control">bhardwaj.anshit1379@gmail.com</span>
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Phone Number</span>
                            <span className="detail form-control">787573770</span>
                        </div>
                    </div>
                </div> 
            </div>          
        </div>
    )
  }
}

export default PatientInfo;