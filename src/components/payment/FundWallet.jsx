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
                                        <img src="/assets/images/wallet-1.png" alt="wallet" />
                                    </div>
                                    <div className="col-8">
                                        <p>Deposit</p>
                                        <b className="wallet-amount">N105,000.00</b>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="withdraw-area">
                        <form>
                            <div className="form-group">
                                <input type="text" className="withdraw-form-control" placeholder="Name" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="withdraw-form-control" placeholder="Account Number" />
                            </div>
                            <select className="custom-select wallet-select" id="inputGroupSelect01">
                                <option selected>Select your Bank</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <div className="row wallet-btn-wrapper">
                                <div className="col-sm-6">
                                <div className="btn-wrapper"> <button type="submit" className="cmn-btn fund-btn btn-width center mt-4">CREATE</button> </div>
                                </div>
                                <div className="col-sm-6">
                                <div className="btn-wrapper"> <button type="submit" className="cmn-btn withdraw-btn btn-width center mt-4">CANCEL</button> </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>

    </div>
)


export default WithdrawFund;