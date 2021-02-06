import React from 'react'
import  '../css/home.css'
import heroImg from '../images/inject.jpg'

class Home extends React.Component{
  render(){
    return (
      <div className="body text-center">
        <header>
            <img src={heroImg}  className="hero-img" alt="vaccination"/>
            <section className='hero-text'>
                <h1 className="welcome-head">Welcome to VaxxDoc</h1>
                <p className="welcome-text">Securely record and access administered COVID-19 vaccinations</p>
                <span>
                    <a href="/patient_reg" className="btn patient">Patient</a>
                    <a href="/doctor_login" className="btn doctor">Medical Staff</a>
                </span>
            </section>
        </header>    
      </div>
    )
  }
}

export default Home;