import React, {useState} from 'react';
import Web3 from 'web3';
import './App.css';
function App() {
  const [adress, setAdress] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const handleClick = () => {
    
    try { 
        window.ethereum.enable().then(function() {
          const web3 = new Web3(window.ethereum);
          setLoggedIn(true)
          web3.eth.getAccounts().then(address => {
            setAdress(address);
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
            loggedIn ? <div><h2>Adress: </h2> { adress } </div>:
          <button onClick={handleClick}>Login with Metamask</button>
          }
      </header>
    </div>
  );
}

export default App;
