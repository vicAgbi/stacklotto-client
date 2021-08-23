import React from 'react';
import InnerBanner from '../common/InnerBanner';
import SideNav from '../common/SideNav';

const MyAccount = () => (
    <div>
        <InnerBanner
            pageName={"My Account"}
        />
        <div className="container padding-top-130 padding-bottom-130">
            <div className="row">
                <div className="col-2">
                    <SideNav
                        currentLocation={'account'}
                    />
                </div>
                <div className="col-10 payment-form">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="lottery-search-area">
                                <div>
                                    <span>Personal Information</span>
                                </div>
                                <hr />
                                <div className="mt-4">
                                    <label>Full Name</label>
                                    <div className="input-group ">
                                        <input type="text" className="form-control rounded px-4 py-4" aria-describedby="basic-addon1" placeholder="John Don" />
                                        <div className="frm-group">
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <label>Email</label>
                                    <div className="input-group ">
                                        <input type="email" className="form-control rounded px-4 py-4" aria-describedby="basic-addon1" placeholder="johndon@gmail.com" />
                                        <div className="frm-group">
                                        </div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <button type="submit" className="cmn-btn center mt-4">Update</button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-lg-6">
                            <div className="lottery-search-area">
                                <div>
                                    <span>Personal Information</span>
                                </div>
                                <hr />
                                <div className="mt-4">
                                    <label>Current Password</label>
                                    <div className="input-group ">
                                        <input type="password" className="form-control rounded px-4 py-4" aria-describedby="basic-addon1" placeholder="John Don" />
                                        <div className="frm-group">
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <label>New Password</label>
                                    <div className="input-group ">
                                        <input type="password" className="form-control rounded px-4 py-4" aria-describedby="basic-addon1" placeholder="johndon@gmail.com" />
                                        <div className="frm-group">
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <label>Confirm Password</label>
                                    <div className="input-group ">
                                        <input type="password" className="form-control rounded px-4 py-4" aria-describedby="basic-addon1" placeholder="johndon@gmail.com" />
                                        <div className="frm-group">
                                        </div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <button type="submit" className="cmn-btn center mt-4">Update</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </div>
)


export default MyAccount;