import React from 'react';
import InnerBanner from '../common/InnerBanner';
import SideNav from '../common/SideNav';

const Transaction = () => (
    <div>
        <InnerBanner
            pageName={"My Account"}
        />
        <div className="container padding-top-130 padding-bottom-130">
        <div className="row">
            <div className="col-2">
                <SideNav
                    currentLocation={'transaction'}
                />
            </div>
            <div className="col-10">
                <div className="filter-wrapper lottery-search-area">
                    <div className="title">Filter</div>
                    <div className="row">
                        <div className="col-sm-4">
                            <label>Type</label>
                            <select className="custom-select" id="inputGroupSelect01">
                                <option selected>Choose...</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className="col-sm-4">
                            <label>Start Date</label>
                            <select className="custom-select" id="inputGroupSelect01">
                                <option selected>Choose...</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className="col-sm-4">
                            <label>End Date</label>
                            <select className="custom-select" id="inputGroupSelect01">
                                <option selected>Choose...</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">
                            <button type="submit" className="cmn-btn fund-btn btn-width center mt-4">Show</button>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="tran-title">Recent Transaction</h3>
                    <div className="row trans-wrapper">
                        <div className="col-8">
                            <div>
                                <h5>Lucky 5(2 Tickets)</h5>
                                <p className="mt-2">Monday 18 Feb 2020 13:00:20 GMT</p>
                            </div>
                        </div>

                        <div className="col-4">
                            <h5 className="trans-amount-danger">- N400</h5>
                        </div>
                    </div>
                    <div className="row trans-wrapper">
                        <div className="col-8">
                            <div>
                                <h5>Match 4(3 Tickets)</h5>
                                <p className="mt-2">Monday 18 Feb 2020 13:00:20 GMT</p>
                            </div>
                        </div>

                        <div className="col-4">
                            <h5 className="trans-amount-danger">- N600</h5>
                        </div>
                    </div>
                    <div className="row trans-wrapper">
                        <div className="col-8">
                            <div>
                                <h5>Deposit Via Paystack</h5>
                                <p className="mt-2">Monday 18 Feb 2020 13:00:20 GMT</p>
                            </div>
                        </div>

                        <div className="col-4">
                            <h5 className="trans-amount-success">N7000</h5>
                        </div>
                    </div>
                    <div className="row trans-wrapper">
                        <div className="col-8">
                            <div>
                                <h5>Withdraw to Bank Account</h5>
                                <p className="mt-2">Monday 18 Feb 2020 13:00:20 GMT</p>
                            </div>
                        </div>

                        <div className="col-4">
                            <h5 className="trans-amount-danger">- N7000</h5>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        </div>
    </div>
)


export default Transaction;