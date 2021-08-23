import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import InnerBanner from '../common/InnerBanner'

const Registration = () => {
  const [redirect, setRedirect] = useState(0);

  const onSubmit = (event) => {
    event.preventDefault()
    setRedirect(true)
  }
  return (
    redirect ? <Redirect to="/success-signup" /> :
    <div>
      <InnerBanner
        pageName="Registration"
      />
      <section className="registration-section padding-top-130 padding-bottom-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="registration-block text-center">
                <div className="registration-block-inner">
                  <h4 className="title">create  your account</h4>
                  <form className="cmn-form registration-form" onSubmit={(event) => onSubmit(event)}>
                    <div className="frm-group">
                      <input type="text" name="f-name" id="f-name" placeholder="Input your first name" />
                    </div>
                    <div className="frm-group">
                      <input type="text" name="l-name" id="l-name" placeholder="Input your last name" />
                    </div>
                    <div className="frm-group">
                      <input type="text" name="website" id="website" placeholder="Input your user name" />
                    </div>
                    <div className="frm-group">
                      <input type="email" name="name" id="name" placeholder="Input your email address" />
                    </div>
                    <div className="frm-group">
                      <input type="password" name="pass" id="pass" placeholder="Input your password" />
                    </div>
                    <div className="frm-group">
                      <input type="password" name="re-pass" id="re-pass" placeholder="Enter re-password" />
                    </div>
                    <div className="frm-group">
                      <button type="submit" className="cmn-btn">Sign in</button>
                    </div>
                  </form>
                  <p>Already have an account?<Link to="/login">Log in</Link></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  
  )
}


export default Registration;