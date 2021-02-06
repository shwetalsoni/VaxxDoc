import React from 'react'
import {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import api from '../api/api'
import  '../css/patient_info.css'
import Syringe from '../images/syringe.png'

function PatientInfo() {
    let { email } = useParams();

    let [user, setUser] = React.useState('')
    let [loaded, setLoaded] = React.useState('')
    let [notFound, setNotFound] = React.useState('')

    useEffect(() => {
        api.getUser(email)
        .then((response)=>{
            setUser(response.data)
            setLoaded(true)
            console.log(response)
        })
        .catch((error) => {
            console.log(error)
            setLoaded(true)
            setNotFound(true)
        })
    }, [email])

    let vaccine1Card, vaccine2Card
    let v1Date = new Date(user.v1Date * 1000)
    let v2Date = new Date(user.v2Date * 1000)
    if(user.v1){
        vaccine1Card = (
            <div className="vaccine vaccine-1 text-center">
                <img src={Syringe} className="syringe-icon" alt=""/>
                <span>
                    <h5 className="vacc-status">Vaccinated on</h5>
                    <h5 className="vacc-date">{v1Date.toDateString()}</h5>
                </span>
            </div>
        )
    }else{
        vaccine1Card = (
            <div className="vaccine vaccine-2 text-center">
                <img src={Syringe} className="syringe-icon" alt=""/>
                <span>
                    <h5 className="vacc-status">Dose 1</h5>
                    <h5 className="vacc-date">To be vaccinated</h5>
                </span>
            </div>
        )
    }

    if(user.v2){
        vaccine2Card = (
            <div className="vaccine vaccine-1 text-center">
                <img src={Syringe} className="syringe-icon" alt=""/>
                <span>
                    <h5 className="vacc-status">Vaccinated on</h5>
                    <h5 className="vacc-date">{v2Date.toDateString()}</h5>
                </span>
            </div>
        )
    }else{
        vaccine2Card = (
            <div className="vaccine vaccine-2 text-center">
                <img src={Syringe} className="syringe-icon" alt=""/>
                <span>
                    <h5 className="vacc-status">Dose 2</h5>
                    <h5 className="vacc-date">To be vaccinated</h5>
                </span>
            </div>
        )
    }

    console.log(email)

    if(!loaded) {
        return (
            <h1>Loading...</h1>
        )
    }
    if(notFound) {
        return (
            <>
                <h1>Not Found</h1>
                <p>If you created the account just now, wait atleast 20s. It takes some time to update the blockchain.</p>
            </>
        )
    }

    return (
        <div className="body">
            <div className="container">
                {notFound ? (<h1 className="text-center">Not Found!</h1>) : (<></>)}
                <div className="row vacc-div">
                    <div className="col-12 col-sm-8 col-md-8 col-lg-6 mx-auto">
                        <div className="row">
                            <div className="col-6">
                                {vaccine1Card}
                            </div>
                            <div className="col-6">
                                {vaccine2Card}
                            </div>
                        </div>
                    </div>
                </div>   
                <div className="row">
                    <div className="col-12 text-center">
                        <h1 className="patient-head">{user.hospital}</h1>
                    </div>
                    <div className="col-12 col-sm-8 col-md-8 col-lg-6 mx-auto">
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Name</span>
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
                    </div>
                </div> 
            </div>          
        </div>
    )
  }


export default PatientInfo;