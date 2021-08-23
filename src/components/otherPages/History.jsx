import React from 'react';
import InnerBanner from '../common/InnerBanner';

const History = () => (
    <div>
        <InnerBanner
            pageName={"History"}
        />
        <div>
            <section className="padding-top-130 padding-bottom-130">
                <div className="container">
                    <div className="filter-wrapper lottery-search-area">
                        <div className="title">Filter</div>
                        <div className="row">
                            <div className="col-sm-3">
                                <label>Type</label>
                                <select className="custom-select" id="inputGroupSelect01">
                                    <option selected>Choose...</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className="col-sm-3">
                            <label>Start Date</label>
                                <select className="custom-select" id="inputGroupSelect01">
                                    <option selected>Choose...</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className="col-sm-3">
                            <label>End Date</label>
                                <select className="custom-select" id="inputGroupSelect01">
                                    <option selected>Choose...</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className="col-sm-3">
                                <button type="submit" className="cmn-btn fund-btn btn-width center mt-4">Show</button>
                            </div>
                        </div>

                    </div>

                    <table className="table table-bordered">
                        <thead className="table-top">
                            <tr>
                                <th >Ticket</th>
                                <th>Game Type</th>
                                <th>Selection</th>
                                <th>Draw Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th></th>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <th></th>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>

    </div>
)


export default History;