import React from 'react';
import InnerBanner from '../common/InnerBanner';
import CheckTicket from '../common/CheckTicket';

const Match649Result = () => (
  <div>
    <InnerBanner
      pageName={"Latest Lottery Result"}
    />
    <div>
    <section className="next-draw-section">
      <div className="next-draw-area latest-lottery-draw">
        <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-header text-center">

              <div className="match">
        <img src="/assets/images/Capture33.png" className="img-fluid" alt="Responsive"></img>
      </div>
                <h2 className="header-title">Latest Lottery Result</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="row next-draw-wrapper">
                <div className="col-3">
                <i className="fa fa-caret-left" aria-hidden="true"></i>
                </div>
                <div className="col-6">
                <div className="align-items-center">
                <div>
                  <h3 className="title">Draw Date: Jan. 8, 2020</h3>
                </div>
                <div>
                  <div id="clock">
                    <div>
                      <span>45</span>
                    </div>
                    <div>
                      <span>39</span>
                    </div>
                    <div>
                      <span>49</span>
                    </div>
                    <div>
                      <span>6</span>
                    </div>
                    <div>
                      <span>5</span>
                    </div>
                    <div>
                      <span>4</span>
                    </div>
                    <div>
                      <span className="spa">3</span>
                    </div>
                  
                    
                  </div>
                </div>
                <button type="submit" className="cmn-btn draw-btn center mt-4">View All Draw Results</button>
              </div>
                </div>

                <div className="col-3">
                <i className="fa fa-caret-right" aria-hidden="true"></i>

                </div>
                
              </div>
           
            </div>
          </div>
        </div>
      </div>
    </section>
    
      <section className="latest-lottery-result padding-top-130 padding-bottom-130">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="lottery-result-table-area">
                <table>
                  <thead>
                    <tr>
                      <th>Kind</th>
                      <th>Winners</th>
                      <th>Amount</th>
                      <th>   </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <ul className="number-result-list">
                          <p>Exact Order</p>
                        </ul>
                      </td>
                      <td>21-03-2019</td>
                      <td>$2.6M</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>
                        <ul className="number-result-list">
                          <p>Any Order 1-way Combination</p>
                        </ul>
                      </td>
                      <td>21-03-2019</td>
                      <td>$2.6M</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>
                        <ul className="number-result-list">
                          <p>Any Order 2-way Combination</p>
                        </ul>
                      </td>
                      <td>21-03-2019</td>
                      <td>$2.6M</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>
                        <ul className="number-result-list">
                          <p>Exac-tAny Order 1-way Combination</p>
                        </ul>
                      </td>
                      <td>21-03-2019</td>
                      <td>$2.6M</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>
                        <ul className="number-result-list">
                          <p>Exact-Any Order 2-way Combination</p>
                        </ul>
                      </td>
                      <td>21-03-2019</td>
                      <td>$2.6M</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>
                        <ul className="number-result-list">
                          <p>Back 1</p>
                        </ul>
                      </td>
                      <td>21-03-2019</td>
                      <td>$2.6M</td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="section-padding check-section">
      <CheckTicket
        color="text-white"
      />
    </div>
    </div>

  </div>
)


export default Match649Result;