import React from 'react';
import CheckTicket from '../common/CheckTicket';
import InnerBanner from '../common/InnerBanner';

const CheckTicketPage = () => (
  <div className="">
    <InnerBanner
      pageName={"Check Ticket"}
    />
    <div className="section-padding">
      <CheckTicket
        color="text-black"
      />
    </div>
  </div>




)

export default CheckTicketPage; 