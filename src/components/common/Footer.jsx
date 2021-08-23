import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => (
  <footer className="footer-section">
    <div className="footer-top">
      <div className="search-wrapper">
      <div className="container">
      <div className="footer-widget">
        <div className="widget widget_subscibe">
          <h5 className="widget-title text-center">Don't miss any update from us, hit the subscribe button dont be scared we won't spam you!</h5>
          <form className="subscribe-form">
            <input type="email" name="sub-email" id="sub_email" placeholder="Email address" />
            <button type="submit" className="subscribe-btn">subscribe</button>
          </form>
        </div>
      </div>
      </div>
      </div>

      <div className="container">
        <div className="row">
        <div className="col-sm-8">
          <div className="row">
          <div className="col-sm-3">
            <div className="footer-widget">
              <div className="widget widget_about">
                <h3 className="text-white mt-8">Quick Links</h3>
                <ul className="link mt-4">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="">About Us</Link></li>
                  <li><Link to="">Results</Link></li>
                  <li><Link to="">Blog</Link></li>
                  <li><Link to="">Contact</Link></li>
                  <li><Link to="">Faq</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="footer-widget">
              <div className="widget widget_menu">
                <h3 className="widget-title">Partners</h3>
                <ul>
                  <li><a href="https://stacklotto-affiliate.herokuapp.com/registration" target="_blank">Become an Affiliate</a></li>
                  <li><a href="https://stacklotto-agent.herokuapp.com/registration " target="_blank">Become an Agent</a></li>
                </ul>
                <span className="rated-18 mt-4">
                  +18 Play wisely
            </span>
              </div>
            </div>
          </div>

          <div className="col-sm-5">
            <div className="footer-widget">
              <div className="widget widget_address">
                <h3 className="widget-title">Contact Us</h3>
                <div className="text-sm">
                  <ul>
                    <li>Stack Lottery and Games Limited,</li>
                    <li>73 Akpakpava Road, Benin City, <br/>Edo State - Nigeria.</li>
                    <li><a href="tel:+2348100030442">+234 8100030442</a></li>
                    <li><a href="tel:+2349050701111">+234 9050701111</a></li>
                    <li><a href="info@stackloto.com">info@stackloto.com</a></li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
          </div>

        </div>
          <div className="col-sm-4">
            <div className="footer-widget">
              <div className="widget widget_subscibe">
                <h3 className="widget-title">Payment Method</h3>
                <div className="row px-2">
                  <div className="col-lg-4"><img src="./assets/images/Mask Group 10.png" alt="opay" /></div>
                  <div className="col-lg-4"><img src="./assets/images/Group 4527.png" alt="opay" /></div>
                  <div className="col-lg-4"><img src="./assets/images/Group 4526.png" alt="opay" /></div>

                </div>
                <div className="row mt-2 px-2">
                  <div className="col-lg-4"><img src="./assets/images/Group 4528.png" alt="opay" /></div>
                  <div className="col-lg-4"><img src="./assets/images/Group 4529.png" alt="opay" /></div>
                  <div className="col-lg-4"><img src="./assets/images/Group 4530.png" alt="opay" /></div>

                </div>
                <p className="follow">Follow us on</p>

                <div className="mt-2">
                <i className="fab fa-facebook"></i>
                <i className='fab fa-twitter-square'></i>
                <i className='fab fa-youtube-square'></i>
                <i className='fab fa-instagram-square'></i>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div className="footer-coptyright">Copyright (c) { new Date().getFullYear() } Stacklotto. All rights reserved.</div>
  </footer>
)

export default Footer;