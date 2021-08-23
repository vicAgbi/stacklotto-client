import React from 'react';
import GoogleMap from '../common/GoogleMap';

const ContactUs = () => (
    <div>
      
    <section className="inner-page-banne ">
    <div className="container">
     <div className="contact ">
       <img src="/assets/images/Group 4532.png" alt="contact"/>
      </div>
    </div>
    <h3 className="stack">Stacklotto support team are always ready to assist you with any issues <br/> and queries you may have.</h3>
  </section>

<section className="contact-section padding-top-130 padding-bottom-130">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-5">
          <div className="address-area">
            <h3 className="title">Head Office</h3>
            <ul>
              <li>
                <div className="icon"><i className="fa fa-home"></i></div>
                <div className="content">
                  <p>Stack Lottery and Games Limited</p>
                  <p>73 Akpakpava Road</p>
                  <p>Benin City, Edo State, Nigeria</p>
                </div>
              </li>
              <li>
                <div className="icon"><i className="fa fa-phone"></i></div>
                <div className="content">
                  <p>+234 8100030442</p>
                </div>
              </li>
              <li>
                <div className="icon"><i className="fa fa-phone"></i></div>
                <div className="content">
                <p>+234 9050701111</p>
                </div>
              </li>
              <li>
                <div className="icon"><i className="fa fa-envelope"></i></div>
                <div className="content">
                  <p>info@stacklotto.com</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-8 col-md-7">
          <div className="contact-area">
            <form className="cmn-form comment-form">
              <div className="frm-group">
                <div className="row">
                  <div className="col-lg-6">
                    <input type="text" name="con_f_name" id="con_f_name" placeholder="First Name" />
                  </div>
                  <div className="col-lg-6">
                    <input type="text" name="con_l_name" id="con_l_name" placeholder="Last Name" />
                  </div>
                </div>
              </div>
              <div className="frm-group">
                <div className="row">
                  <div className="col-lg-6">
                    <input type="tel" name="con_number" id="con_number" placeholder="Phone Number" />
                  </div>
                  <div className="col-lg-6">
                    <input type="email" name="con_emial" id="con_emial" placeholder="Email" />
                  </div>
                </div>
              </div>
              <div className="frm-group">
                <textarea name="con_message" id="con_message" placeholder="Write Message"></textarea>
              </div>
              <div className="frm-group">
                <button type="submit" className="cmn-btn">Post Comment</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div>
   <GoogleMap/>
  </div>
  
    </div>
)


export default ContactUs;