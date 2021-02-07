import React from 'react'
import { Redirect } from 'react-router'
import api from '../api/api'
import  '../css/doctor_login.css'

class DoctorLogin extends React.Component{

    state = {
        loggedin: false
    }

    handleEmailChange =  (e) => {
        this.setState({email: e.target.value});
    }

    handlePasswordChange =  (e) => {
        this.setState({password: e.target.value});
    }

    handleLogin = () => {
        // this.setState({loggedin: true})
        api.staffLogin(
            this.state.email,
            this.state.password
        )
        .then((response) => {
            this.setState({loggedin: true})
        })
        .catch((error) => {
            console.log(error)
            alert("Wrong email or password.")
        })
    }

  render(){

    if(this.state.loggedin){
        return <Redirect to="/patient_display"/>
    }

    return (
        <div className="body">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 doctor-form-body mx-auto">
                        <form>
                            <h3 className="heading text-center">Login to Edit Details</h3>
                            <div className="form-group">
                                <input type="email" className="form-control" id="email" onChange={this.handleNameChange} aria-describedby="emailHelp" placeholder="Email" />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" id="password" onChange={this.handlePasswordChange} placeholder="Password" />
                            </div>
                            <button type="button" onClick={this.handleLogin} className="btn-com btn-signup">LOGIN</button>
                        </form> 
                    </div>
                </div>    
            </div>          
        </div>
    )
  }
}

export default DoctorLogin;