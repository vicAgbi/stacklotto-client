import React from 'react';
import InnerBanner from '../common/InnerBanner';
import SideNav from '../common/SideNav';
import {Link} from 'react-router-dom';

const Wallet = () => (
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
                        <div className="col-sm-6">
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
                            <Link to="/fund-wallet" type="submit" className="cmn-btn fund-btn btn-width center mt-4">FUND WALLET</Link>
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
                            <div>
                                <Link to="/withdraw" className="cmn-btn withdraw-btn btn-width center mt-4">WITHDRAW</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)


export default Wallet;