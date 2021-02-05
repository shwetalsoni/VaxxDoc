import React from 'react'
import  '../css/patient_reg.css'

class PatientRegister extends React.Component{
  render(){
    return (
      <div className="body">
          <div className="container">
              <div className="row">
                  <div className="col-md-4 form-body mx-auto">
                    <form>
                        <h3 className="heading text-center">Welcome to VaxxDoc</h3>
                        <div className="form-group">
                            <input type="text" className="form-control" id="exampleInputName" placeholder="Username" />
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" id="exampleInputPassword" placeholder="Password" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" id="exampleInputAge" placeholder="Age" />
                        </div>
                        <div className="form-group">
                            <select className="form-control" id="exampleFormControlSelect1">
                            <option>Female</option>
                            <option>Male</option>
                            <option>Prefer not to reveal</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" id="exampleInputPhone" placeholder="Phone" />
                        </div>
                        <button type="submit" className="btn-com btn-signup">SIGN UP</button>
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