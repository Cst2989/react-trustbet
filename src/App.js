import React, { useState, useEffect } from "react";
import GenericNotFound from './views/not-found';
import CreatedBet from './views/create-bet';
import BetPage from './views/bet-page';
import HomePage from './views/home-page';
import Web3 from "web3";
import "./App.css";
import { BrowserRouter, Route, Redirect, Switch, Link } from 'react-router-dom';
function App() {
  const [adress, setAdress] = useState("");
  const [balance, setBalance] = useState(0);
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    try {
      window.ethereum.enable().then(function() {
        const web3 = new Web3(window.ethereum);
        setLoggedIn(true);
        web3.eth.getAccounts().then(address => {
          setAdress(address);
          web3.eth.getBalance(address[0]).then(res => {
            const value = res / Math.pow(10, 18);
            setBalance(value);
          });
        });
      });
    } catch (e) {
      setLoggedIn(false);
    }
  }, []);
  const handleClick = () => {
    try {
      window.ethereum.enable().then(function() {
        const web3 = new Web3(window.ethereum);
        setLoggedIn(true);
        web3.eth.getAccounts().then(address => {
          setAdress(address);
          web3.eth.getBalance(address[0]).then(res => {
            const value = res / Math.pow(10, 18);
            setBalance(value);
          });
        });
      });
    } catch (e) {
      setLoggedIn(false);
    }
  };
  
  return (
    <div className="App">
    <BrowserRouter>
      <header className="App-header">
        {loggedIn ? (
          <div>
            <h2>Adress: </h2> {adress}
            <h2>Balance: </h2> {balance} ETH <br/>
            
            <Link to={'/create-bet/'} className="homepage_link__main">Create Bet</Link>
          </div>
        ) : (
          <button onClick={handleClick}>Login with Metamask</button>
        )}
      </header>
        <Switch>
            <Route exact path="/create-bet" component={CreatedBet} />
            <Route exact path="/bet/:betID" component={BetPage} />
            <Route exact path="/404" component={GenericNotFound} />
            <Route exact path="/" component={HomePage} />
            <Redirect from='*' exact to='/404' />
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
