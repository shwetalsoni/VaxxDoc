import React from 'react'
import { Redirect } from 'react-router'
import  '../css/doctor_login.css'

class DoctorLogin extends React.Component{

    state = {
        loggedin: false
    }

    handleLogin = () => {
        this.setState({loggedin: true})
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
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" id="exampleInputPassword" placeholder="Password" />
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