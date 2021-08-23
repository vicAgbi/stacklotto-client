import React from 'react';
import InnerBanner from '../common/InnerBanner';
import SideNav from '../common/SideNav';

const BankAccountTransfer = () => (
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
                            <div>Bank Account Transfer</div>
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
                    <div className="lottery-text-area bank-transfer-wrap">
                        <div>
                            <div>
                                <p>Transfer the amount you wish to fund using your bank USSD or Mobile
                                banking. Your stacklotto deposit wallet will be funded immediately
                                </p>
                            </div>
                            <div>
                                <p className="bank-text">Bank Name</p>
                                <p>Access Bank PLC</p>
                                <div>
                                    <p className="bank-text">Bank Account Number</p>
                                    <p>XXXXX878XX (Savings Account)</p>
                                </div>
                            </div>
                            <div className="btn-wrapper"> <button type="submit" className="cmn-btn copy-btn withdraw-btn-width center mt-4">COPY ACCOUNT DETAIL</button> </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>
)


export default BankAccountTransfer;