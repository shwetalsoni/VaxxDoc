import React from 'react'
import { Redirect } from 'react-router'
import api from '../api/api';
import  '../css/patient_reg.css'

class PatientRegister extends React.Component{

    state = {
        loggedin: false
    }

    handleEmailChange =  (e) => {
        this.setState({email: e.target.value});
    }
    handleNameChange =  (e) => {
        this.setState({name: e.target.value});
    }
    handleAgeChange =  (e) => {
        this.setState({age: e.target.value});
    }
    handleGenderChange =  (e) => {
        this.setState({gender: e.target.value});
    }
    handleNumberChange =  (e) => {
        this.setState({number: e.target.value});
    }
    handlePasswordChange =  (e) => {
        this.setState({password: e.target.value});
    }

    handleLogin = () => {
        console.log(this.state.name)
        api.register(
            this.state.email,
            this.state.name,
            this.state.age,
            this.state.gender,
            this.state.number,
            this.state.password
        )
        .then((response) => {
            this.setState({loggedin: true})
        })
        .catch((error) => {
            console.log(error)
        })
    }

  render(){

    if(this.state.loggedin){
        return <Redirect to={"/patient_info/"+ this.state.email}/>
    }
    return (
        
      <div className="body">
          <div className="container">
              <div className="row">
                  <div className="col-md-4 form-body mx-auto">
                    <form>
                        <h3 className="heading text-center">Welcome to VaxxDoc</h3>
                        <div className="form-group">
                            <input type="text" className="form-control" id="name" onChange={this.handleNameChange} placeholder="Fullname" />
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" id="email" onChange={this.handleEmailChange} placeholder="Email" />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" id="password" onChange={this.handlePasswordChange} placeholder="Password" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" id="age" onChange={this.handleAgeChange} placeholder="Age" />
                        </div>
                        <div className="form-group">
                            <select className="form-control" id="gender" onChange={this.handleGenderChange}>
                            <option>Female</option>
                            <option>Male</option>
                            <option>Prefer not to reveal</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" id="number" onChange={this.handleNumberChange} placeholder="Phone" />
                        </div>
                        <button type="button" className="btn-com btn-signup" onClick={this.handleLogin}>SIGN UP</button>
                    </form> 
                    <button className="btn-com btn-google"><i className="fa fa-google google-icon" aria-hidden="true"></i>SIGN IN WITH GOOGLE</button>
                    <div className="extra text-center">
                        <span className="small-text">Already have an account?</span>
                        <a href="/patient_login" className="btn-2 btn-login">LOGIN</a>
                    </div>
                  </div>
              </div>    
          </div>          
      </div>
    )
  }
}

export default PatientRegister;