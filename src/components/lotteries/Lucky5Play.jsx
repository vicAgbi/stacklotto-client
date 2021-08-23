import React from 'react';
import{ Link } from 'react-router-dom';
import $ from 'jquery';
import InnerBanner from '../common/InnerBanner';

const Match5Play = () => {

  const onClick = () => {
    $('.modal').removeClass('in');
    $('.modal').attr("aria-hidden","true");
    $('.modal').css("display", "none");
    $('.modal-backdrop').remove();
    $('body').removeClass('modal-open');
  }
  return (
    <div>
       <InnerBanner
          pageName={"Lucky 5"}
      />
  
      <div className="match matches-width">
        <img src="/assets/images/lucky-5.png" className="img-fluid" alt="Responsive"/>
  
      </div>
  
      <div className="text">
        <p> Number of tickets selected: 2</p>
        <p>Cost of ticket selection:  N200.00</p>
        <p>Available Balance:  ₦5000.00</p>
      </div>
  
  
      <div className="row match-btn-wrapper">
        <div className="col-6">
          <button className="center playe-btn" data-toggle="modal" data-target="#myModal">Confirm & Play</button>
        </div>
        <div className="col-6">
          <button type="submit" className="center cancel-btn">Cancel</button>
        </div>
  
      </div>
  
  
      <div className="modal fade modal-box" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
    
                    <div className="modal-body">
                      <div className="modal-text-wrapper">
                        <i className="fa fa-check-circle check-icon" aria-hidden="true"></i>
                        <h4 className="modal-title">Ticket Placed Sucessfully</h4>
                        <p className="winning-text">Your lotteries with ticket numbers XD563HFKFKFJG, have been successfully placed.</p>
                        <Link to="/lottories" className="cmn-btn fund-btn wallet-btn center mt-4" onClick={() => onClick()}>Back to Lotteries</Link>
                      </div>
                    </div>
    
                  </div>
                </div>
              </div>
    </div>
  
  )
}

export default Match5Play;