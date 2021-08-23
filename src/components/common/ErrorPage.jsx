import React from 'react';
import { Link } from 'react-router-dom'

const ErrorPage = () => (
    <section className="error-section section-padding">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="error-area">
            <div className="error-thumb">
              <img src="/assets/images/error.png" alt="error"/>
            </div>
            <div className="error-content">
              <h4>Opps! Page Not Found</h4>
              <p>The page you are looking is not available or has been removed.</p>
              <Link to="/" className="cmn-btn">Home</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default ErrorPage;