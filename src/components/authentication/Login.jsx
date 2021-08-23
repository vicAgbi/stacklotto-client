import React from 'react';
import { Link } from 'react-router-dom'
import InnerBanner from '../common/InnerBanner'

const Login = () => (
    <div>
      <InnerBanner
        pageName="Login"
      />

  <section className="login-section padding-top-130 padding-bottom-130">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="login-block text-center">
            <div className="login-block-inner">
              <h4 className="title">login your account </h4>
              <form className="cmn-form login-form">
                <div className="frm-group">
                  <input type="text" name="login_name"  placeholder="Input your email address"/>
                </div>
                <div className="frm-group">
                  <input type="password" name="login_pass"  placeholder="Input your password"/>
                </div>
                <div className="frm-group">
                  <button type="submit" className="cmn-btn">Login</button>
                </div>
                <div className="frm-group">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="checkbox text-md-left">
                        <label>
                          <input type="checkbox"/>
                          <span className="cr"><i className="cr-icon fa fa-check"></i></span>
                          <span>Remember me</span>
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="text-md-right">
                        <a href="#0">Forget password?</a>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              <p>If you are now user to Stacklotto?<Link to="/registration">Sign up now</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
)

export default Login;