import React from 'react'
import  '../css/doctor_edit.css'

class DoctorEdit extends React.Component{
  render(){
    return (
        <div className="body">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-md-8 col-sm-10 mx-auto">
                        <form className="edit-form">
                            <input className="form-control" type="search" placeholder="Browse patients to edit info below" aria-label="Search" />
                            <button className="btn btn-search  my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </div> 
                <div className="row">
                    <div className="col-lg-5 col-md-8 col-sm-10 mx-auto">
                        <h1 className="name text-center">Anshit</h1>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Hospital</span>
                            <span className="detail form-control">Fortiz Mohali</span>
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
                        <span className="check-span">
                            <div className="form-check check1">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" for="flexCheckDefault">
                                    Dose 1
                                </label>
                            </div>
                            <div className="form-check check2">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" for="flexCheckDefault">
                                    Dose 2
                                </label>
                            </div>
                        </span>
                    </div>
                </div>   
            </div>          
        </div>
    )
  }
}

export default DoctorEdit;