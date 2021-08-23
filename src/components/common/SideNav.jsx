import React from 'react';
import { Link } from 'react-router-dom';

const SideNav = ({ currentLocation }) => (
    <div className="side-bg">
        <Link to="/my-account">
            <div className={currentLocation === 'account' ? 'sideActive' : ''}>
                <img src="/assets/images/profile.png" alt="profile"/>
                <p className="my-4">My Account</p>
            </div>
        </Link>

        <hr />
        <Link to="/wallet">
            <div className={currentLocation === 'wallet' ? 'sideActive' : ''}>
                <img src="/assets/images/wallet.png" alt="wallet" />
                <p className="my-4">Wallet</p>
            </div>
        </Link>

        <hr />
        <Link to="/transactions">
            <div className={currentLocation === 'transaction' ? 'sideActive' : ''}>
                <img src="/assets/images/transfer.png" alt="transactions" />
                <p className="my-4">Transactions</p>
            </div>
        </Link>
        <hr />
        <div>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
        </div>
    </div>
)


export default SideNav;