import React from 'react';
import {Link} from 'react-router-dom';

const InnerBanner = ({ pageName }) => (
    <section className="inner-page-banner">
    <div className="container">
      <div className="row">
        <div className="col-lg-7 col-md-6">
          <div className="inner-page-wrapper">
            <h2 className="page-title">{pageName}</h2>
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/">home</Link></li>
              <li className="breadcrumb-item active">{pageName}</li>
            </ol>
          </div>
        </div>
        <div className="col-lg-5 col-md-6">
          <div className="inner-banner-img"></div>
        </div>
      </div>
    </div>
  </section>
)

export default InnerBanner