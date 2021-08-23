import React from 'react';
import InnerBanner from '../common/InnerBanner';
import SideNav from '../common/SideNav';

const FundAccount = () => (
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
                            <div>Fund Account</div>
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
                    <div className="withdraw-area bank-transfer-wrap">
                        <div className="row">
                            <div className="col-sm-4 wallet-logo-wrap">
                                    <img src="/assets/images/paystack.png" alt="paystack"/>
                            </div>
                            <div className="col-sm-4 wallet-logo-wrap">
                                    <img src="/assets/images/opay.png" alt="paystack"/>
                            </div>
                            <div className="col-sm-4 wallet-logo-wrap">
                                    <img src="/assets/images/opay.png" alt="paystack"/>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-sm-4 wallet-logo-wrap">
                                    <img src="/assets/images/monify.png" alt="paystack"/>
                            </div>
                            <div className="col-sm-4 wallet-logo-wrap">
                                    <img src="/assets/images/USSD.png" alt="paystack"/>
                            </div>
                            <div className="col-sm-4 wallet-logo-wrap">
                                    <img src="/assets/images/monify.png" alt="paystack"/>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-sm-4 wallet-logo-wrap">
                                    <img src="/assets/images/monify.png" alt="paystack"/>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

        </div>

    </div>
)


export default FundAccount;