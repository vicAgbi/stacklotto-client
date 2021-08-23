import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import InnerBanner from '../common/InnerBanner';
import Select from 'react-select';

class Match2Game extends Component {
    constructor(props) {
        super(props);
        this.state={}
      }
      handleChange = selectedOption => {
        this.setState(() => ({ selectedOption }));
      };
    
      options = [
        {
          label: 'Exact Order',
          value: 2
        },
        {
          label: 'Any Order',
          value: 3
        },
        {
          label: 'Exact Order/ Any Order',
          value: 4
        },
        {
          label: 'Front Number Play',
          value: 5
        },
        {
          label: 'Back Number Play',
          value: 6
        }
    ]
    

    render() {
        const { selectedOption } = this.state
        return(
            <div>
                <InnerBanner
                    pageName={"Match 2"}
                />
        
                <div className="container">
                    <div className="match matches-width">
                        <img src="/assets/images/Group 4523.png" className="img-fluid" alt="Responsive"></img>
                    </div>
                    <h2 className="text-center text-lg">₦2,200.00</h2>
                    <p className="text-center">Select 2 numbers from 0 - 9 or choose quick pick <br />
                        <Link to="" className="click-here">click here</Link> for more details on how to play</p>
        
                    <div className="lottery-search-area search-container">
                        <div className="row">
                            <div className="col-sm-8">
                                <div className="input-group">
                                    <input type="text" className="form-control rounded px-4 py-4 custom-search-input" aria-describedby="basic-addon1" placeholder="Enter Number of Play" />
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
                            <div className="select-number-area match-2-select">
                                <h3 className="title">Select Number</h3>
                                <ul className="number-list match-2">
                                    <li>0</li>
                                    <li>0</li>
                                    <li >1</li>
                                    <li>1</li>
                                    <li>2</li>
                                    <li>2</li>
                                    <li>3</li>
                                    <li>3</li>
                                    <li>4</li>
                                    <li>4</li>
                                    <li>5</li>
                                    <li className="active">5</li>
                                    <li>6</li>
                                    <li>6</li>
                                    <li >7</li>
                                    <li>7</li>
                                    <li>8</li>
                                    <li>8</li>
                                    <li>9</li>
                                    <li>9</li>
                                    
        
        
                                </ul>
        
                            </div>
                            <div className="row bottom-row">
                                <div className="col-lg-6">
                                    <div className="number-select-area">
                                        <ul className="number-lis">
                                            <li>29</li>
                                            <li>30</li>
        
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6 m-auto">
                        <button type="submit" className="center ticket-btn">Add to Ticket</button>
                      </div>
                            </div>
        
                        </div>
                        <div className="col-lg-4">
                            <div className="number-select-area">
                                <h3 className="title">Number of tickets selected: 2 </h3>
                                <ul className="number-list">
                                    <li className="active">0</li>
                                    <li className="active">1</li>
                                    <li className="active">X</li>
        
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
                 
                  <Select
                    onMenuClose={false}
                    defaultValue={selectedOption}
                    options={this.options}
                    onChange={this.handleChange}
                    placeholder="Select Play Type"
                    classNamePrefix="custom-select-style"
                    /> 
                  <div className="row">
                  <div className="col-6">
                        <Link to="/match2" className="center playe-btn">Play</Link>
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
        
    }

} 
export default Match2Game;
