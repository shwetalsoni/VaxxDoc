import React from 'react'
import  '../css/doctor_edit.css'
import api from '../api/api'

class DoctorEdit extends React.Component{

  state = {
    user: {}
  }

  componentDidMount() {
    api.getUser()
    .then((response)=>{
        this.setState({
          user : response.data
        })
        console.log("asdasfsa", this.state.data)
        console.log(response)
    })
    .catch((error) => {
        console.log(error)
    })
  }

  
  render(){
    return (
        <div className="body">
            <div className="container">
                {/* <div className="row">
                    <div className="col-lg-5 col-md-8 col-sm-10 mx-auto">
                        <form className="edit-form">
                            <input className="form-control" type="search" placeholder="Browse patients to edit info below" aria-label="Search" />
                            <button className="btn btn-search  my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </div>  */}
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
                            <div className="dose1">
                                <p className="label-btn">Dose 1</p>
                                <button type="submit" className="btn btn-toggle1">Mark as vaccinated</button>
                            </div>
                            <div className="dose2">
                                <p className="label-btn">Dose 2</p>
                                <button type="submit" className="btn btn-toggle2">Mark as vaccinated</button>
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