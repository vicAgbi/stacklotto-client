import React from 'react';
import InnerBanner from '../common/InnerBanner';
import SideNav from '../common/SideNav';

const WithdrawFund = () => (
    <div>
        <InnerBanner
            pageName={"My Account"}
        />
        <div className="container padding-top-130 padding-bottom-130">
            <div className="row">
                <div className="col-2">
                    <SideNav
                        currentLocation={'wallet'}
                    />
                </div>
                <div className="col-10">
                    <div className="row">
                        <div className="col-sm-6 wallet-bank-transfer">
                            <div>Fund Wallet</div>
                        </div>
                        <div className="col-sm-6 withdraw">
                            <div className="lottery-search-area">
                                <div className="row">
                                    <div className="col-4">
                                        <img src="/assets/images/wallet-2.png" alt="wallet" />
                                    </div>
                                    <div className="col-8">
                                        <p>Winning</p>
                                        <b className="wallet-amount">N105,000.00</b>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lottery-text-area">
                        <div>
                            <div className="">
                                <form>
                                    <div className="">
                                    <select className="custom-select wallet-select" id="inputGroupSelect01">
                                <option selected>Select Account</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                                     </div>
                                    <div className="form-group">
                                        <input type="text" className="withdraw-form-control text-input" placeholder="Amount" />
                                        <label for="exampleFormControlSelect1" className="minimum-text"><em>Minimum amount of withdrawal must must be at least N5,000</em></label>
                                    </div>
                                    <div className="second-text-input">
                                        <input type="text" className="withdraw-form-control text-input" placeholder="Enter Password" />
                                    </div>
                                </form>
                            </div>
                            <div className="btn-wrapper">
                                <button type="button" data-toggle="modal" data-target="#exampleModalLong" className="cmn-btn fund-btn center mt-4">SEND ORDER</button>


                                <div className="modal fade modal-box" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content">

                                            <div className="modal-body">
                                                <div className="modal-text-wrapper">
                                                <i className="fa fa-check-circle-o check-icon" aria-hidden="true"></i>
                                                    <h3>Withdrawal successful</h3>
                                                    <p className="winning-text">Your winning will be sent to your <br />
                                                        winning wallet within 24 hours
                                                </p>
                                                <button type="button" className="cmn-btn fund-btn wallet-btn center mt-4">Back to wallet</button>
                                            </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>



                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)


export default WithdrawFund;