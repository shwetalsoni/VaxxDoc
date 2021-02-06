import React from 'react'
import  '../css/patient_display.css'
import api from '../api/api'

class PatientDisplay extends React.Component{

  state = {
    data: {}
  }

  componentDidMount() {
    api.getUser()
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
          {/* <p>{this.state.data['name']}</p> */}
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
                  DATA:
                  {this.state.data.name}
                </div>
                <div className="row">
                    <div className="col-10 mx-auto">
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
                                
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Anshit</td>
                                    <td>bhardwaj.anshit1379@gmail.com</td>
                                    <td><button className="btn vac-btn btn-sm">Vaccinated</button></td>
                                    <td><button className="btn novac-btn btn-sm">Not Vaccinated</button></td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Shwetal</td>
                                    <td>195034@nith.ac.in</td>
                                    <td><button className="btn novac-btn btn-sm">Not Vaccinated</button></td>
                                    <td><button className="btn novac-btn btn-sm">Not Vaccinated</button></td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Jacob</td>
                                    <td>abc@gamil.com</td>
                                    <td><button className="btn vac-btn btn-sm">Vaccinated</button></td>
                                    <td><button className="btn novac-btn btn-sm">Not Vaccinated</button></td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>Jacob</td>
                                    <td>123@gmail.com</td>
                                    <td><button className="btn vac-btn btn-sm">Vaccinated</button></td>
                                    <td><button className="btn vac-btn btn-sm">Vaccinated</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>          
        </div>
    )
  }
}

export default PatientDisplay;