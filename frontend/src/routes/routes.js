import React from 'react'
import {Route, Switch} from 'react-router-dom';

import Home from '../components/Home'
import PatientRegister from '../components/PatientRegister'
import PatientLogin from '../components/PatientLogin'
import PatientInfo from '../components/PatientInfo'
import DoctorLogin from '../components/DoctorLogin';
import DoctorEdit from '../components/DoctorEdit';
import PatientDisplay from '../components/PatientDisplay';

export default function Routes() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/patient_reg" component={PatientRegister} />
                <Route exact path="/patient_login" component={PatientLogin} />
                <Route exact path="/patient_info/:email" component={PatientInfo} />
                <Route exact path="/doctor_login" component={DoctorLogin} />
                <Route exact path="/doctor_edit/:email" component={DoctorEdit} />
                <Route exact path="/patient_display" component={PatientDisplay} />
            </Switch>
        </div>
    )
}
