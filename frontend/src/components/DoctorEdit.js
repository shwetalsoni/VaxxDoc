import React from 'react'
import {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import api from '../api/api'
import  '../css/doctor_edit.css'

function DoctorEdit() {

    let { email } = useParams();

    let [user, setUser] = React.useState('')
    let [notFound, setNotFound] = React.useState('')

    useEffect(() => {
        api.getUser(email)
        .then((response)=>{
            setUser(response.data)
            console.log(response)
        })
        .catch((error) => {
            console.log(error)
            setNotFound(true)
        })
    }, [email])

    let markV1 = () => {
        api.markV1(email, "AIIMS")
        .then((response) => {
            user.v1 = true
            setUser(user)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    let markV2 = () => {
        api.markV2(email)
        .then((response) => {
            user.v2 = true
            setUser(user)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    let v1Date = new Date(user.v1Date * 1000)
    let v2Date = new Date(user.v2Date * 1000)
  
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
                { notFound ? (
                    <div className="row">
                        <h1>Not Found</h1>
                    </div>
                ) : (<></>)}
                <div className="row">
                    <div className="col-lg-5 col-md-8 col-sm-10 mx-auto">
                        <h1 className="name text-center">{user.name}</h1>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Hospital</span>
                            <span className="detail form-control">{user.name}</span>
                        </div>
                        <span className="flex">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Gender</span>
                                <span className="detail form-control">{user.gender}</span>
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Age</span>
                                <span className="detail form-control">{user.age}</span>
                            </div>
                        </span> 
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Email</span>
                            <span className="detail form-control">{email}</span>
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Phone Number</span>
                            <span className="detail form-control">{user.number}</span>
                        </div>
                        <span className="check-span">
                            <div className="dose1">
                                <p className="label-btn">Dose 1</p>
                                <button type="submit" className="btn btn-toggle1" onClick={markV1}>
                                    {user.v1 ? ("Vaccinated") : ("Mark as Vaccinated")}
                                </button>
                            </div>
                            <div className="dose2">
                                <p className="label-btn">Dose 2</p>
                                <button type="submit" className="btn btn-toggle2"onClick={markV2}>
                                    {user.v2 ? ("Vaccinated") : ("Mark as Vaccinated")}
                                </button>
                            </div>
                        </span>
                    </div>
                </div>   
            </div>          
        </div>
    )
  }

export default DoctorEdit;