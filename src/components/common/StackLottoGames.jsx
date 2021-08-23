import React from 'react';
import { Link } from 'react-router-dom';

const StackLottoGames = () => (
    <section className="stack-lotto-section section-padding">
        <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-8">
                <div className="section-header text-center">
                    <h2 className="header-title">Stacklotto Lotteries</h2>
                    <h4>Choose from the Stacklotto 649, Stacklotto 425, Lucky 5, <br/>
                    Match 4, Match 3 or Match 2 and try for a chance to win big.                
                    </h4>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-4">
                <div className="card text-center">
                <div className="card-body">
                    <img src="/assets/images/Capture33.png" alt="649"/>
                    <p className="card-text">₦3,700,000.00 Jackpot! </p>
                    <div className="row start-time text-center">
                        <div className="col-3">
                            <div className="time-col">00</div>
                            <small>days</small>
                        </div>
                        <div className="col-3">
                            <div className="time-col">00</div>
                            <small>hrs</small>
                        </div>
                        <div className="col-3">
                            <div className="time-col">00</div>
                            <small>mins</small>
                        </div>
                        <div className="col-3">
                            <div className="time-col">00</div>
                            <small>sec</small>
                        </div>
                    </div>
                    <p className="card-text">₦200 / Ticket</p>
                    <Link to="/match649" className="card-play-btn center mt-4">Play Now</Link>
                </div>
                </div>

            </div>
            <div className="col-lg-4">
                <div className="card text-center">
                <div className="card-body">
                    <img src="/assets/images/GF.png" alt="425"/>
                    <p className="card-text">₦30,000.00</p>
                    <div className="row start-time text-center">
                        <div className="col-3">
                            <div className="time-col">00</div>
                            <small>days</small>
                        </div>
                        <div className="col-3">
                            <div className="time-col">00</div>
                            <small>hrs</small>
                        </div>
                        <div className="col-3">
                            <div className="time-col">00</div>
                            <small>mins</small>
                        </div>
                        <div className="col-3">
                            <div className="time-col">00</div>
                            <small>sec</small>
                        </div>
                    </div>
                    <p className="card-text">₦100 / Ticket</p>
                    <Link to="/match425" className="card-play-btn center mt-4">Play Now</Link>
                </div>
                </div>

            </div>
            <div className="col-lg-4">
                <div className="card text-center">
                <div className="card-body">
                    <img src="/assets/images/lucky-5.png" alt="lucky-5"/>
                    <p className="card-text">₦350,000.00</p>
                    <div className="row start-time text-center">
                        <div className="col-3">
                            <div className="time-col">00</div>
                            <small>days</small>
                        </div>
                        <div className="col-3">
                            <div className="time-col">00</div>
                            <small>hrs</small>
                        </div>
                        <div className="col-3">
                            <div className="time-col">00</div>
                            <small>mins</small>
                        </div>
                        <div className="col-3">
                            <div className="time-col">00</div>
                            <small>sec</small>
                        </div>
                    </div>
                    <p className="card-text">₦100 / Ticket</p>
                    <Link to="/lucky5" className="card-play-btn center mt-4">Play Now</Link>
                </div>
                </div>
            </div>
        </div>
        <div className="row mt-4">
            <div className="col-lg-4">
                <div className="card text-center">
                <div className="card-body">
                    <img src="/assets/images/Group 4521.png" alt="match-4"/>
                    <p className="card-text">₦20,000.00</p>
                    <div className="row start-time text-center">
                        <div className="col-3">
                            <div className="time-col">00</div>
                            <small>days</small>
                        </div>
                        <div className="col-3">
                            <div className="time-col">00</div>
                            <small>hrs</small>
                        </div>
                        <div className="col-3">
                            <div className="time-col">00</div>
                            <small>mins</small>
                        </div>
                        <div className="col-3">
                            <div className="time-col">00</div>
                            <small>sec</small>
                        </div>
                    </div>
                    <p className="card-text">₦100 / Ticket</p>
                    <Link to="/match4" className="card-play-btn center mt-4">Play Now</Link>
                </div>
                </div>

            </div>
            <div className="col-lg-4">
                <div className="card text-center">
                <div className="card-body">
                    <img src="/assets/images/Group 4522.png" alt="match-3"/>
                    <p className="card-text">₦8,000.00</p>
                    <div className="row start-time text-center">
                        <div className="col-3">
                            <div className="time-col">00</div>
                            <small>days</small>
                        </div>
                        <div className="col-3">
                            <div className="time-col">00</div>
                            <small>hrs</small>
                        </div>
                        <div className="col-3">
                            <div className="time-col">00</div>
                            <small>mins</small>
                        </div>
                        <div className="col-3">
                            <div className="time-col">00</div>
                            <small>sec</small>
                        </div>
                    </div>
                    <p className="card-text">₦100 / Ticket</p>
                    <Link to="/match3" className="card-play-btn center mt-4">Play Now</Link>
                </div>
                </div>

            </div>
            <div className="col-lg-4">
                <div className="card text-center">
                <div className="card-body">
                    <img src="/assets/images/Group 4523.png" alt="match-2"/>
                    <p className="card-text">₦2,200.00</p>
                    <div className="row start-time text-center">
                        <div className="col-3">
                            <div className="time-col">00</div>
                            <small>days</small>
                        </div>
                        <div className="col-3">
                            <div className="time-col">00</div>
                            <small>hrs</small>
                        </div>
                        <div className="col-3">
                            <div className="time-col">00</div>
                            <small>mins</small>
                        </div>
                        <div className="col-3">
                            <div className="time-col">00</div>
                            <small>sec</small>
                        </div>
                    </div>
                    <p className="card-text">₦100 / Ticket</p>
                    <Link to="/match2-game" className="card-play-btn center mt-4">Play Now</Link>
                </div>
                </div>

            </div>
            

        </div>

        </div>

    </section>
)

export default StackLottoGames