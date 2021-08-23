import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './common/Header'
import Footer from './common/Footer';
import Blog from './otherPages/Blog';
import Login from './authentication/Login'
import Registration from './authentication/Registration'
import Match4Result from './resultAndWinning/Match4Result';
import HomePage from './homepage/HomePage';
import Match2 from './lotteries/Match2';
import CheckTicket from './otherPages/CheckTicketPage';
import ContactUs from './otherPages/ContactUs';
import Faq from './otherPages/Faq';
import Draws from './resultAndWinning/Draws';
import Lottories from './lotteries/Lottories';
import Match425 from './lotteries/Match425';
import History from './otherPages/History';
import MyAccount from './authentication/MyAccount';
import Wallet from './payment/Wallet';
import BankAccountTransfer from './payment/BankAccountTransfer'
import Match649 from './lotteries/Match649'
import Lucky5 from './lotteries/Lucky5'
import Match4 from './lotteries/Match4'
import Match3 from './lotteries/Match3'
import Match2Game from './lotteries/Match2Game'
import ErrorPage from './common/ErrorPage'
import Transaction from './payment/Transaction';
import FundWallet from './payment/FundWallet';
import WithdrawFund from './payment/WithdrawFund';
import FundAccount from './payment/FundAccount';
import Match4Play from './lotteries/Match4Play';
import Lucky5Play from './lotteries/Lucky5Play';
import Match3Play from './lotteries/Match3Play';
import Match425Play from './lotteries/Match425Play';
import Match649Play from './lotteries/Match649Play';
import Match3Result from './resultAndWinning/Match3Result';
import Match2Result from './resultAndWinning/Match2Result';
import Match425Result from './resultAndWinning/Match425Result';
import Lucky5Result from './resultAndWinning/Lucky5Result';
import Match649Result from './resultAndWinning/Match649Result';
import BlogDetails from './otherPages/BlogDetails';
import ScrollToTop from 'react-scroll-up';
import SignupSuccess from './otherPages/SignupSuccess';

const App = () => (
  <div>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/registration" component={Registration} />
        <Route exact path="/match4-result" component={Match4Result} />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/match2" component={Match2} />
        <Route exact path="/check-ticket" component={CheckTicket} />
        <Route exact path="/contact-us" component={ContactUs} />
        <Route exact path="/faq" component={Faq} />
        <Route exact path="/draws" component={Draws} />
        <Route exact path="/lottories" component={Lottories} />
        <Route exact path="/match425" component={Match425}/>
        <Route exact path="/history" component={History} />
        <Route exact path="/my-account" component={MyAccount}/>
        <Route exact path="/wallet" component={Wallet}/>
        <Route exact path="/bank-transfer" component={BankAccountTransfer}/>
        <Route exact path="/match649" component={Match649}/>
        <Route exact path="/lucky5" component={Lucky5}/>
        <Route exact path="/match4" component={Match4}/>
        <Route exact path="/match3" component={Match3}/>
        <Route exact path="/match2-game" component={Match2Game}/>
        <Route exact path="/transactions" component={Transaction}/>
        <Route exact path="/fund-wallet" component={FundWallet}/>
        <Route exact path="/withdraw" component={WithdrawFund}/>
        <Route exact path="/fund-account" component={FundAccount}/>
        <Route exact path="/match4-play" component={Match4Play}/>
        <Route exact path="/lucky5-play" component={Lucky5Play}/>
        <Route exact path="/match3-play" component={Match3Play}/>
        <Route exact path="/match425-play" component={Match425Play}/>
        <Route exact path="/match649-play" component={Match649Play}/>
        <Route exact path="/match3-result" component={Match3Result}/>
        <Route exact path="/match2-result" component={Match2Result}/>
        <Route exact path="/match425-result" component={Match425Result}/>
        <Route exact path="/lucky5-result" component={Lucky5Result}/>
        <Route exact path="/match649-result" component={Match649Result}/>
        <Route exact path="/blog-single" component={BlogDetails}/>
        <Route exact path="/success-signup" component={SignupSuccess} />
        <Route component={ErrorPage} />
        
      </Switch>
      <ScrollToTop 
        showUnder={160}
        style={
          {
            right: 60
          }
        }
        >
        <div className="top">
          <i className="fas fa-arrow-up"></i>
          <div>TOP</div>
        </div>
      </ScrollToTop>
    <Footer/>
    </Router>
      
  </div>

)

export default App;
