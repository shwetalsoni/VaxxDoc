import React from 'react'
import api from '../api/api'
import  '../css/patient_login.css'

class PatientLogin extends React.Component{

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
      api.login(
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
    return (
      <div className="body">
          <div className="container">
              <div className="row">
                  <div className="col-md-4 form-body login-form mx-auto">
                    <form>
                        <h3 className="heading text-center">Login to Continue</h3>
                        <div className="form-group">
                            <input type="email" className="form-control" id="email" onChange={this.handleNameChange} placeholder="Email" />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" id="password" onChange={this.handlePasswordChange} placeholder="Password" />
                        </div>
                        <button type="submit" className="btn-com btn-signup">LOGIN</button>
                    </form> 
                    <button className="btn-com btn-google"><i className="fa fa-google google-icon" aria-hidden="true"></i>SIGN IN WITH GOOGLE</button>
                    <div className="extra text-center">
                        <span className="small">Doesn't have an account?</span>
                        <a href="/patient_reg" className="btn-2 btn-login">SIGN UP</a>
                    </div>
                  </div>
              </div>    
          </div>          
      </div>
    )
  }
}

export default PatientLogin;