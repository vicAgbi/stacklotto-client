import React from 'react';
import { Link } from 'react-router-dom'
import InnerBanner from '../common/InnerBanner';

const Match425 = () => (
  <div>
    <InnerBanner
      pageName={"Stacklotto 425"}
    />

    <div className="container">
      <div className="match">
        <img src="/assets/images/GF.png" className="img-fluid" alt="Responsive"></img>
      </div>
      <h2 className="text-center text-lg">₦30,000.00 </h2>
      <p className="text-center">Select 4 numbers from 1 - 25 or choose quick pick <br />
        <Link to="" className="click-here">click here</Link> for more details on how to play</p>

      <div className="lottery-search-area search-container">
        <div className="row">
          <div className="col-sm-8">
          <div className="input-group">
          <input type="text" className="form-control rounded px-4 py-4 custom-search-input" aria-describedby="basic-addon1" placeholder="Enter Number of Play"/>
          <div className="frm-group">
          </div>
        </div>
          </div>
          <div className="col-sm-4">
          <button type="submit" className="cmn-btn withdraw-btn quick-btn btn-width center mt-4">Quick Play</button>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-4">
          <div className="select-number-area">
            <h3 className="title">Select Number</h3>
            <ul className="number-list">
              <li>1</li>
              <li>2</li>
              <li className="active" >3</li>
              <li >4</li>
              <li>5</li>
              <li>6</li>
              <li>7</li>
              <li>8</li>
              <li className="active">9</li>
              <li>10</li>
              <li>11</li>
              <li>12</li>
              <li>13</li>
              <li>14</li>
              <li>15</li>
              <li>16</li>
              <li>17</li>
              <li className="active">18</li>
              <li>19</li>
              <li>20</li>
              <li>21</li>
              <li >22</li>
              <li>23</li>
              <li>24</li>
              <li>25</li>
              
            </ul>
          </div>
          <div className="row">
          <div className="col-lg-8">
          <div className="number-select-area">
            <ul className="number-lis">
              <li>29</li>
              <li>30</li>
              <li>31</li>
              <li>32</li>
              </ul>
              </div>
              </div>
             
              <div className="col-lg-4 m-auto">
                <button type="submit" className="center ticket-btn">Add to Ticket</button>
              </div>
      </div>
    
        </div>
        <div className="col-lg-4">
          <div className="number-select-area match-425-select">
            <h3 className="title">Number of tickets selected: 4 </h3>
            <ul className="number-lis match-425">
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>X</li>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>X</li>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>X</li>

             
            </ul>
          </div>
        </div>
        <div className="col-lg-4">
        <div className="lottery-search-area custom-div">
          <div className="row mb-2">
            <div className="col-6">
              Total Cost:
            </div>
            <div className="col-6">
            ₦100
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-6">
              Draw Date:
            </div>
            <div className="col-6">
            June 15, 2020
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-6">
              Player:
            </div>
            <div className="col-6">
            Michael Ezeokoye
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-6">
              Number:
            </div>
            <div className="col-6">
            08038090211
            </div>
          </div>
          <div className="row">
          <div className="col-6">
          <Link to="/match425-play" className="center playe-btn">Play</Link>
              </div>
              <div className="col-6">
                <button type="submit" className="center cancel-btn">Cancel</button>
              </div>

          </div>
         
          </div>
        </div>
      </div>

              
    
    </div>


  </div>
)

export default Match425;