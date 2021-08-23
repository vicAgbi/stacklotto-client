import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => (
  <header className="header-section">
    <div className="header-bottom">
      <div className="container">
        <nav className="navbar navbar-expand-lg pt-4 cus-nav">
          <Link className="site-logo site-title" to="/"><img src="assets/images/stack_logo.png" alt="site-logo" width="270" /></Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="menu-toggle"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav main-menu ml-auto">
            <form className="cmn-form login-form">
              <div className="row">
                <div className="col-md-5 cus-col bg-313153">
                  <input type="text" name="login_name" id="login_name" placeholder="Username" autoComplete="username"/>
                </div>
                <div className="col-md-5 cus-col bg-313153">
                <input type="password" name="current-password" id="current-password" autoComplete="current-password" placeholder="Password" />
              </div>
              <div className="col-md-2 cus-col">
                <button type="submit" className="log-btn">Login</button>
              </div>
              
              </div>
              <div className="row">
             
              <div className="col-md-4 cus-col">
                    <div className="forget">
                      <a href="#0">Forget password?</a>
                    </div>
                  </div>
                  <div className="col-md-8 cus-col">
                    <div className="forget">
                      <Link to="/registration">Register</Link>
                    </div>
                  </div>
              </div>
            </form>
            </div>
          </div>
        </nav>
        <nav className="navbar navbar-expand-lg">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav main-menu m-auto">
              <li><Link to="/">HOME</Link></li>
              <li><Link to="/lottories">LOTTERIES</Link></li>
              <li className="menu_has_children"><Link to="/draws">RESULTS AND WINNINGS</Link>
                <ul className="sub-menu">
                  <li><Link to="/draws">DRAWS</Link></li>
                  
                  <li><Link to="/match649-result">Stacklotto 649</Link></li>
                  <li><Link to="/match425-result">Stacklotto 425</Link></li>
                  <li><Link to="/lucky5-result">Lucky5</Link></li>
                  <li><Link to="/match4-result">Match 4</Link></li>
                  <li><Link to="/match3-result">Match 3</Link></li>
                  <li><Link to="/match2-result">Match 2</Link></li>
                </ul>
              </li>
              <li><Link to="/check-ticket">CHECK TICKET</Link></li>
              <li className="menu_has_children"><Link to="/blog">BLOG PAGES</Link>
                  <ul className="sub-menu">
                    <li><Link to="/blog">Blog Page</Link></li>
                    <li><Link to="/blog-single">Blog Single</Link></li>
                  </ul>
              </li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/contact-us">CONTACT US</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </header>
)

export default Header;