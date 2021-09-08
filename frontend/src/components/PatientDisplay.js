import React from 'react'
import { Redirect } from 'react-router'
import {Link} from 'react-router-dom';
import  '../css/patient_display.css'
import api from '../api/api'
import Loader from './Loader'

class PatientDisplay extends React.Component{

    state = {
        data: {},
        loading: true,
        loggedin: true
    }

    componentDidMount() {

        api.checkStaffLogin()
        .then((response) => {
            console.log(response)
            if(response.data.loggedin === true){
                this.setState({loggedin: true})
                this.getUsersData()
            }else{
                this.setState({loading: false})
            }
        })
        .catch((error) => {
            console.log(error)
            this.setState({loading: false})
        })

        
    }

    getUsersData = () => {
        api.getUsers()
        .then((response)=>{
            this.setState({
                loading: false,
                data: response.data
            })
            console.log(response)
        })
        .catch((error) => {
            alert("Error while fetching data.")
            console.log(error)
        })
    }

    logout = () => {
        api.logout()
        .then((response) => {
            this.setState({loggedin: false})
        })
        .catch((error) => {
            console.log(error)
        })
    }

    render(){

        if(this.state.loading){
            return <Loader/>
        }

        if(this.state.loggedin === false){
            return <Redirect to="/"/>
        }

        return (
        
        <div className="body">
            <button onClick={this.logout}>Logout</button>
            <div className="container">
                <div className="row mx-auto">
                    <div className="col-lg-5 col-md-8 col-sm-10 mx-auto">
                        <form className="edit-form">
                            <input className="form-control mr-2" type="search" placeholder="Browse patients to edit info below" aria-label="Search" />
                            <button className="btn search  my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </div> 
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="table-responsive">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Dose 1</th>
                                        <th scope="col">Dose 2</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Object.keys(this.state.data).map((email, i)=> {
                                        return (
                                            <tr key={i}>
                                                <th scope="row"><Link to={"/doctor_edit/" + email}>{i+1}</Link></th>
                                                <td><Link to={"/doctor_edit/" + email}>{this.state.data[email].name}</Link></td>
                                                <td><Link to={"/doctor_edit/" + email}>{email}</Link></td>
                                                <td>{this.state.data[email].v1 ? (<p className="vac-btn">Vaccinated</p>) : (<p className="novac-btn">Not Vaccinated</p>)}</td>
                                                <td>{this.state.data[email].v2 ? (<p className="vac-btn">Vaccinated</p>) : (<p className="novac-btn">Not Vaccinated</p>)}</td>
                                            </tr>
                                        )
                                    })}
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>          
        </div>
    )
  }
}

export default PatientDisplay;