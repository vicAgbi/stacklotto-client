import React from 'react';

const CheckTicket = ({ color }) => (

    

    <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-8">
                <div className="section-header text-center">
                    <h2 className={`header-title ${color}`}>Check Your Lottery Ticket</h2>
                </div>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-lg-6">
                <div className="lottery-search-area text-center">
                    <p>Enter the Ticket number or Batch number to check the <br /> current status of your game.  </p>
                    <div className="row radios">
                        <div className="col-lg-6">
                            <div className="radio-item">
                                <input type="radio" id="ticket-number" name="ritem" value="ropt1" />
                                <label htmlFor="ticket-number">Ticket Number</label>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="radio-item">
                                <input type="radio" id="batch-number" name="ritem" value="ropt1" />
                                <label htmlFor="batch-number">Batch Number</label>
                            </div>
                        </div>
                    </div>

                    <div className="input-group ">
                        <input type="number" className="form-control rounded px-4 py-4" aria-describedby="basic-addon1" />
                        <div className="frm-group">
                        </div>
                    </div>
                    <button type="submit" className="cmn-btn center mt-4">Check Result</button>
                </div>
            </div>
        </div>
    </div>
)

export default CheckTicket