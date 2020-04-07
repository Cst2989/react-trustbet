import React, {useState} from 'react';
import Web3 from 'web3';
import './App.css';
function App() {
  const [adress, setAdress] = useState('');
  const [balance, setBalance] = useState(0);
  const [loggedIn, setLoggedIn] = useState(false);
  const handleClick = () => {
    
    try { 
        window.ethereum.enable().then(function() {
          const web3 = new Web3(window.ethereum);
          setLoggedIn(true)
          web3.eth.getAccounts().then(address => {
            setAdress(address);
            web3.eth.getBalance(address[0])
            .then(res => {
              const value = res / Math.pow(10, 18);
              setBalance(value)
            });
          });
        });
    } catch(e) {
        setLoggedIn(false)
    }
  }
  return (
    <div className="App">
      <header className="App-header">
          {
            loggedIn ? <div>
              <h2>Adress: </h2> { adress } 
              <h2>Balance: </h2> { balance } ETH
            </div>:
          <button onClick={handleClick}>Login with Metamask</button>
          }
      </header>
    </div>
  );
}

export default App;
