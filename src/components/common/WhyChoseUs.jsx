import React from 'react';

const WhyChoseUs = () => (
    <section className="choose-section section-padding section-bg">
    <div className="container">
      <div className="row  justify-content-center">
        <div className="col-lg-6">
          <div className="section-header text-center">
            <h2>Why You Chose Us</h2>
          </div>
        </div>
      </div>
      <div className="row mt-mb-15">
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="choose-single-item">
            <i className="flaticon-fan"></i>
            <h4 className="title">Great Lottery Jackpots</h4>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="choose-single-item">
            <i className="flaticon-payment"></i>
            <h4 className="title">Instant Payout system</h4>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="choose-single-item">
            <i className="flaticon-shield"></i>
            <h4 className="title"> 100% <br/>Safe Secure</h4>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="choose-single-item">
            <i className="flaticon-support"></i>
            <h4 className="title">24 Hour Customer Support</h4>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default WhyChoseUs;