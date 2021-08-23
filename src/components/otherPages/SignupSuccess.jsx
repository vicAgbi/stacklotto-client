import React from 'react';
import { Link } from 'react-router-dom'
import InnerBanner from '../common/InnerBanner'

const SignupSuccess = () => (
    <div>
        <InnerBanner
            pageName="Login"
        />
        <section className="container">
            <div className="success-wrapper">
                <h4> Your account has been successfully created.
A verification link has been sent to your email. kindly verify your account and login</h4>
                <Link to="/login"><button type="button" className="cmn-btn fund-btn center">Login</button></Link>
            </div>
           
        </section>

    </div>
)

export default SignupSuccess;