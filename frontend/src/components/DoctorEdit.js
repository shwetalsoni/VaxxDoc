import React from 'react'
import {useEffect} from 'react'
import {useParams, Redirect} from 'react-router-dom'
import api from '../api/api'
import  '../css/doctor_edit.css'
import Loader from './Loader'

function DoctorEdit() {

    let { email } = useParams();

    let [user, setUser] = React.useState('')
    let [v1, setV1] = React.useState(false)
    let [v2, setV2] = React.useState(false)
    let [notFound, setNotFound] = React.useState(false)
    let [loading, setLoading] = React.useState(true)
    let [loggedin, setLoggedin] = React.useState(false)
    let [markingVaccination, setMarkingVaccination] = React.useState(false)

    useEffect(() => {

        api.checkStaffLogin()
        .then((response) => {
            console.log(response)
            if(response.data.loggedin === true){
                setLoggedin(true)

                api.getUser(email)
                .then((response)=>{
                    setUser(response.data)
                    setLoading(false)
                    console.log(response)
                })
                .catch((error) => {
                    console.log(error)
                    setNotFound(true)
                    setLoading(false)
                })
            }else{
                setLoading(false)
            }
        })
        .catch((error) => {
            console.log(error)
            setLoading(false)
        })

    }, [email])

    let markV1 = () => {
        setMarkingVaccination(true)
        api.markV1(email, "AIIMS")
        .then((response) => {
            setV1(true)
            setMarkingVaccination(false)
        })
        .catch((error) => {
            console.log(error)
            setMarkingVaccination(false)
        })
    }

    let markV2 = () => {
        setMarkingVaccination(true)
        api.markV2(email)
        .then((response) => {
            setV2(true)
            setMarkingVaccination(false)
        })
        .catch((error) => {
            console.log(error)
            setMarkingVaccination(false)
        })
    }

    if(loading){
        return <Loader/>
    }

    if(!loggedin){
        return <Redirect to="/"/>
    }

    return (
        <div className="body">
            { markingVaccination ? (
                    <div>
                        <Loader/>
                    </div>
                ) : (<></>)}
            <div className="container">
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
                                {user.v1 || v1 ? (<button type="submit" className="btn btn-toggle1">Vaccinated</button>) : 
                                           (<button type="submit" onClick={markV1} className="btn btn-toggle2">Mark as Vaccinated</button>)}
                            </div>
                            <div className="dose2">
                                <p className="label-btn">Dose 2</p> 
                                {user.v2 || v2 ? (<button type="submit" className="btn btn-toggle1">Vaccinated</button>) : 
                                           (<button type="submit" onClick={markV2} className="btn btn-toggle2">Mark as Vaccinated</button>)}
                            </div>
                        </span>
                        <p className="additional-text">It may take a while to update the data</p>
                    </div>
                </div>   
            </div>          
        </div>
    )
  }

export default DoctorEdit;