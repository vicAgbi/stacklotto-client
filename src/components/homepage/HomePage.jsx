import React from 'react';
import WhyChooseUs from '../common/WhyChoseUs'
import AffiliatePrograms from './AffiliatePrograms';
import AboutApp from './AboutApp';
import CheckTicket from '../common/CheckTicket';
import StackLottoGames from '../common/StackLottoGames';

const HomePage = () => (
  <div>
    <div className="landing-wrapper">
    <div className="landing-content-wrapper">
      <div className="container">
      <div className="row">
      <div className="col-lg-7 col-md-12">
        <div className="take-chance">Take the chance to <br/> change your life</div>
        <p>Welcome to the official website of Stacklotto where you can play <br/> Stacklotto lotteries safely and securely online 
        from the comfort of <br/> your own home.</p>
        <a href="/#" className="cmn-btn btn-md">JOIN NOW!</a>
      </div>
      </div>
      </div>
      <div className="ball-wrapper d-none d-lg-block">
      <img src="/assets/images/ball.png" alt="ball"/>
      </div>
    </div>
    </div>
  
    
    <section className="next-draw-section">
      <div className="next-draw-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="next-draw-wrapper d-flex align-items-center">
                <div className="next-draw-content">
                  <h2 className="title">Next Draw</h2>
                  <p>The Jackpot has moved up</p>
                </div>
                <div className="next-draw-countdown">
                  <div id="clock">
                    <div>
                      <span>00</span>
                      <p>days</p>
                    </div>
                    <div>
                      <span>00</span>
                      <p>hrs</p>
                    </div>
                    <div>
                      <span>00</span>
                      <p>mins</p>
                    </div>
                    <div>
                      <span>00</span>
                      <p>sec</p>
                    </div>

                  </div>
                </div>
                <div className="next-draw-btn text-right">
                  <a href="/#" className="cmn-btn btn-md">PLAY NOW!</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="step-section">
      
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-header text-center">
              <h2 className="header-title">PLAY TO WIN: <br/> The Stacklotto Lottery has a little something for everyone.</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <div className="step-item">
              <div className="item-number">01</div>
              <div className="icon">
                <img src="assets/images/handtouch.png" alt="handtouch"></img>
              </div>
              <div className="content">
                <h4 className="title">Play</h4>
                <p>Choose lottery and your <br/> Lucky numbers.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="step-item">
              <div className="item-number">02</div>
              <div className="icon">
                <img src="assets/images/handtouch2.png" alt="handtouch2"></img>
              </div>
              <div className="content">
                <h4 className="title">Buy</h4>
                <p>Buy your ticket[s] and make payment.</p>
              </div>
            </div>
          </div>

          
          <div className="col-lg-3">
            <div className="step-item">
              <div className="item-number">03</div>
              <div className="icon">
                <img src="assets/images/noun_invoice_2384764.png" alt="cup"></img>
              </div>
              <div className="content">
                <h4 className="title">Check</h4>
                <p>Purchased ticket[s] <br/> notify by email as proof <br/> of game played.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="step-item">
              <div className="item-number">04</div>
              <div className="icon">
                <img src="assets/images/cup.png" alt="cup"></img>
              </div>
              <div className="content">
                <h4 className="title">Win Jackpot.</h4>
                <p>We will notify by email of <br/> winning numbers. <br/> Good Luck.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <StackLottoGames />
    <WhyChooseUs />

    <section className="latest-lottery-result padding-top-130 padding-bottom-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-header text-center">
              <h2 className="header-title">Latest Lottery Result</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="lottery-result-table-area">
              <table id="lotteryTable">
                <thead>
                  <tr>
                    <th>Winning Numbers</th>
                    <th>Lottery</th>
                    <th>Type</th>
                    <th>Winners</th>
                    <th>Amount</th>
                    <th>Total</th>
                    <th>Draw Date</th>

                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <ul className="number-result-list">
                        <li>3</li>
                        <li>7</li>
                        <li>18</li>
                        <li>26</li>
                        <li>4</li>
                        <li>26</li>
                        <li className="active">46</li>

                      </ul>
                    </td>
                    <td>649</td>
                    <td>NIL</td>
                    <td>$800K</td>
                    <td>$85K</td>
                    <td>$1K</td>
                    <td>Feb 28 2020</td>

                  </tr>
                  <tr>
                    <td>
                      <ul className="number-result-list">
                        <li>3</li>
                        <li>7</li>
                        <li>18</li>
                        <li>26</li>
                        
                      </ul>
                    </td>
                    <td>425</td>
                    <td>NIL</td>
                    <td>$800K</td>
                    <td>$85K</td>
                    <td>$1K</td>
                    <td>Feb 28 2020</td>

                  </tr>


                  <tr>
                    <td>
                      <ul className="number-result-list">
                        <li>3</li>
                        <li>7</li>
                        <li>18</li>
                        <li>26</li>
                        <li>4</li>
                        <li className="active">4</li>
                      </ul>
                    </td>
                    <td>Lucky 5</td>
                    <td>NIL</td>
                    <td>$800K</td>
                    <td>$85K</td>
                    <td>$1K</td>
                    <td>Feb 28 2020</td>

                  </tr>
                  <tr>
                    <td>
                      <ul className="number-result-list">
                        <li>18</li>
                        <li>22</li>
                        <li>32</li>
                        <li>18</li>
                      
                      </ul>
                    </td>
                    <td>Match 4</td>
                    <td>NIL</td>
                    <td>$800K</td>
                    <td>$85K</td>
                    <td>$1K</td>
                    <td>Feb 28 2020</td>

                  </tr>
                  <tr>
                    <td>
                      <ul className="number-result-list">
                        <li>18</li>
                        <li>22</li>
                        <li>32</li>
                        
                      </ul>
                    </td>
                    <td>Match 3</td>
                    <td>Exact-Any order 2-way combination</td>
                    <td>$800K</td>
                    <td>$85K</td>
                    <td>$1K</td>
                    <td>Feb 28 2020</td>

                  </tr>
                  <tr>
                    <td>
                      <ul className="number-result-list">
                        <li>18</li>
                        <li>22</li>
                       
                      </ul>
                    </td>
                    <td>Match 2</td>
                    <td>Black 1</td>
                    <td>$800K</td>
                    <td>$85K</td>
                    <td>$1K</td>
                    <td>Feb 28 2020</td>

                  </tr>
                  <tr>
                    <td>
                      <ul className="number-result-list">
                        <li>18</li>
                        <li>22</li>
                        <li>32</li>
                        <li>18</li>
                        <li>34</li>
                        <li>43</li>
                      </ul>
                    </td>
                    <td>21-03-2019</td>
                    <td></td>
                    <td>$800K</td>
                    <td>$85K</td>
                    <td>$1K</td>
                    <td>Feb 28 2020</td>

                  </tr>
                  <tr>
                    <td>
                      <ul className="number-result-list">
                        <li>18</li>
                        <li>22</li>
                        <li>32</li>
                        <li>18</li>
                        <li>34</li>
                        <li>43</li>
                      </ul>
                    </td>
                    <td>21-03-2019</td>
                    <td>$2.6M</td>
                    <td>$800K</td>
                    <td>$85K</td>
                    <td>$1K</td>
                    <td>Feb 28 2020</td>

                  </tr>
                  <tr>
                    <td>
                      <ul className="number-result-list">
                        <li>18</li>
                        <li>22</li>
                        <li>32</li>
                        <li>18</li>
                        <li>34</li>
                        <li>43</li>
                      </ul>
                    </td>
                    <td>21-03-2019</td>
                    <td>$2.6M</td>
                    <td>$800K</td>
                    <td>$85K</td>
                    <td>$1K</td>
                    <td>Feb 28 2020</td>

                  </tr>
                  <tr>
                    <td>
                      <ul className="number-result-list">
                        <li>18</li>
                        <li>22</li>
                        <li>32</li>
                        <li>18</li>
                        <li>34</li>
                        <li>43</li>
                      </ul>
                    </td>
                    <td>21-03-2019</td>
                    <td>$2.6M</td>
                    <td>$800K</td>
                    <td>$85K</td>
                    <td>$1K</td>
                    <td>Feb 28 2020</td>

                  </tr>
                  <tr>
                    <td>
                      <ul className="number-result-list">
                        <li>18</li>
                        <li>22</li>
                        <li>32</li>
                        <li>18</li>
                        <li>34</li>
                        <li>43</li>
                      </ul>
                    </td>
                    <td>21-03-2019</td>
                    <td>$2.6M</td>
                    <td>$800K</td>
                    <td>$85K</td>
                    <td>$1K</td>
                    <td>Feb 28 2020</td>

                  </tr>
                  <tr>
                    <td>
                      <ul className="number-result-list">
                        <li>18</li>
                        <li>22</li>
                        <li>32</li>
                        <li>18</li>
                        <li>34</li>
                        <li>43</li>
                      </ul>
                    </td>
                    <td>21-03-2019</td>
                    <td>$2.6M</td>
                    <td>$800K</td>
                    <td>$85K</td>
                    <td>$1K</td>
                    <td>Feb 28 2020</td>

                  </tr>
                </tbody>
              </table>
            </div>
            <div className="btn-area text-center">
              <button id="show" type="button" className="cmn-btn load-more">View All</button>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section className="check-lottery-section check-lottery-section-bg padding-top-130 padding-bottom-130 has_bg_image">

      <CheckTicket
        color='text-white'
      />
    </section>
    <AboutApp />
    <AffiliatePrograms />
  </div>




)


export default HomePage;