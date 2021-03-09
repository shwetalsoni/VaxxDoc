import React from 'react'
import {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import api from '../api/api'
import  '../css/patient_info.css'
import Syringe from '../images/syringe.png'
import {Redirect} from 'react-router'

function PatientInfo() {
    let { email } = useParams();

    let [user, setUser] = React.useState('')
    let [loaded, setLoaded] = React.useState('')
    let [notFound, setNotFound] = React.useState('')
    let [loggedIn, setloggedIn] = React.useState('')

    useEffect(() => {
        api.getUser(email)
        .then((response)=>{
            setloggedIn(true)
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

    let handleLogout = () => {
        api.logout(

        )
        .then((response) => {
            this.setState({loggedIn: false})
        })
        .catch((error) => {
            console.log(error)
        })
    }

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
            <svg class="loader" version="1.1" xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
                <path fill="#4468d6" d="M256.011 0c-12.852 0-23.273 10.42-23.273 23.273v93.091c0 12.854 10.421 23.274 23.273 23.274 12.853 0 23.272-10.421 23.272-23.274v-93.091c0-12.853-10.419-23.273-23.272-23.273z"></path>
                <path fill="#4468d6" opacity="0.4" d="M256.011 372.363c-12.852 0-23.273 10.421-23.273 23.272v93.091c0 12.853 10.421 23.274 23.273 23.274 12.853 0 23.272-10.421 23.272-23.274v-93.091c0-12.853-10.419-23.272-23.272-23.272z"></path>
                <path fill="#4468d6" opacity="0.8" d="M173.725 140.809l-65.826-65.828c-9.086-9.089-23.822-9.089-32.912 0-9.089 9.089-9.089 23.824 0 32.912l65.826 65.828c4.544 4.544 10.5 6.816 16.455 6.816s11.912-2.273 16.455-6.816c9.090-9.089 9.090-23.823 0.001-32.912z"></path>
                <path fill="#4468d6" opacity="0.1" d="M459.806 232.727h-46.546c-12.853 0-23.272 10.421-23.272 23.273 0 12.853 10.419 23.272 23.272 23.272h46.546c12.853 0 23.272-10.419 23.272-23.273 0-12.852-10.421-23.273-23.272-23.273z"></path>
                <path fill="#4468d6" opacity="0.3" d="M365.557 338.281c-9.087-9.089-23.823-9.087-32.913 0-9.088 9.089-9.087 23.823 0 32.913l65.828 65.825c4.544 4.544 10.502 6.817 16.457 6.817 5.957 0 11.913-2.274 16.455-6.817 9.089-9.089 9.089-23.825 0-32.913l-65.828-65.825z"></path>
                <path fill="#4468d6" opacity="0.6" d="M139.637 256c0-12.852-10.421-23.273-23.273-23.273h-93.091c-12.853 0-23.273 10.421-23.273 23.273 0 12.853 10.42 23.272 23.273 23.272h93.091c12.852 0 23.273-10.419 23.273-23.273z"></path>
                <path fill="#4468d6" opacity="0.5" d="M173.735 338.283c-9.087-9.089-23.825-9.089-32.912 0l-65.825 65.825c-9.089 9.087-9.089 23.825 0 32.913 4.544 4.544 10.501 6.815 16.457 6.815s11.913-2.271 16.455-6.815l65.825-65.825c9.089-9.087 9.089-23.822 0-32.911z"></path>
            </svg>
        )
    }
    // if(!loggedIn){
    //     return <Redirect to={'/'} />
    // }
    if(notFound) {
        return (
            <>
                <div className="waiting">
                    <h1 className="notfound">Not Found</h1>
                    <p className="wait">If you created the account just now, wait atleast 20s. It takes some time to update the blockchain.</p>
                </div>
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
                        <div class="logout-div">
                            <button type="submit" onClick={handleLogout} className="btn logout">Exit and Logout</button>
                        </div>
                    </div>
                </div> 
            </div>          
        </div>
    )
  }


export default PatientInfo;