import React from 'react';
import InnerBanner from '../common/InnerBanner';

const Draws = () => (
    <div>
        <InnerBanner
            pageName={"Result & Winning"}
        />
        <div>
            <section className="latest-lottery-result padding-top-130 padding-bottom-130">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-header text-center">
                                <h2 className="header-title">You have 10 draw(s)</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="lottery-result-table-area">
                                <table id="lotteryTable">
                                    <thead>
                                        <tr>
                                            <th>Draw dates</th>
                                            <th>Winners</th>
                                            <th>Selection</th>
                                            <th>details</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <p>Feb. 24, 2020</p>
                                            </td>
                                            <td>3</td>
                                            <td>
                                                <ul className="number-result-list custom-num-list">
                                                    <li>9</li>
                                                    <li>8</li>
                                                    <li>5</li>
                                                    <li>1</li>
                                                </ul>
                                            </td>
                                            <td><div className="btn-area text-center">
                                                <button type="button" className="cmn-btn load-more">Details</button>
                                            </div></td>

                                        </tr>
                                        <tr>
                                            <td>
                                                <p>Feb. 24, 2020</p>
                                            </td>
                                            <td>3</td>
                                            <td>
                                                <ul className="number-result-list custom-num-list">
                                                    <li>9</li>
                                                    <li>8</li>
                                                    <li>5</li>
                                                    <li>1</li>
                                                </ul>
                                            </td>
                                            <td><div className="btn-area text-center">
                                                <button type="button" className="cmn-btn load-more">Details</button>
                                            </div></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    </div>
)


export default Draws;