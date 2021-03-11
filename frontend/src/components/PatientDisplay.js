import React from 'react'
import {Link} from 'react-router-dom';
import  '../css/patient_display.css'
import api from '../api/api'

class PatientDisplay extends React.Component{

  state = {
    data: {}
  }
  
  componentDidMount() {
    api.getUsers()
    .then((response)=>{
        this.setState({
          data : response.data
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