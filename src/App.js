import React, { useState, useEffect } from "react";
import Web3 from "web3";
import "./App.css";
const { abi } = require("./contracts/TrustBet.json");
function App() {
  const [adress, setAdress] = useState("");
  const [balance, setBalance] = useState(0);
  const [loggedIn, setLoggedIn] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [options, setOptions] = useState([]);
  const [trustee, setTrustee] = useState('0x9e785c918E1a4017DDc5cf580fc1fbD36E3BB9eB');
  const [amount, setAmount] = useState(10); 

  const getBet = async () => {
    const web3 = new Web3(window.ethereum);
    const TrustBetAddress = '0x40720315dBDA442580118CD8c56bbD9a28b77694'
    const TrustBet = new web3.eth.Contract(abi, TrustBetAddress)
    const Bet = await TrustBet.methods.betDetails(1).call()
    console.log(Bet);
  }
  const createBet = async () => {
      const web3 = new Web3(window.ethereum);
      const accounts = await web3.eth.getAccounts();

      const TrustBetAddress = '0x40720315dBDA442580118CD8c56bbD9a28b77694'
      const TrustBet = new web3.eth.Contract(abi, TrustBetAddress)
      const [manager] = accounts

      const createBetTx = await TrustBet.methods.createBet(
          // name
          name,
          // description
          description,
          // options
          options,
          // value
          new Web3.utils.BN(amount),
          // trustee
          trustee,
          21
      ).send(
          {
              from: manager,
              gas: 500000,
          },
      )

    // Full emitted event
    console.log(createBetTx.events.CreatedBet)
  } 
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
  const handleNrOfOptions = (nr) => {
    const array = Array.from({length: nr})
    setOptions(array);
  }
  const handleOptionChange = (value, idx) => {
    const newOptions = options.map((option, index) => {
      if(index === idx) {
        option = value;
      }
      return option
    })
    setOptions(newOptions);
  }
  return (
    <div className="App">
      <header className="App-header">
        {loggedIn ? (
          <div>
            <h2>Adress: </h2> {adress}
            <h2>Balance: </h2> {balance} ETH <br/>
            
            <button onClick={getBet}>get Bet</button> 
          </div>
        ) : (
          <button onClick={handleClick}>Login with Metamask</button>
        )}
      </header>

      <main className="App-body">
        <div className="createBet">
          <input type="text" placeholder="Name" value={name} onChange={(ev) => setName(ev.target.value)}/>
          <input type="text" placeholder="Description" value={description} onChange={(ev) => setDescription(ev.target.value)}/>
          <input type="number" placeholder="Number of Options" onChange={(ev) => handleNrOfOptions(ev.target.value)}/>
          {
            options.map((option, index) => <div>
              <input type="text" placeholder="Option" value={option}  onChange={(ev) => handleOptionChange(ev.target.value, index)}/>
            </div>)
          }
          <input type="number" placeholder="Amount" value={amount} onChange={(ev) => setAmount(ev.target.value)}/>
          <input type="text" placeholder="Trustee" value={trustee} onChange={(ev) => setTrustee(ev.target.value)}/>

          <button onClick={createBet}>Create Bet</button> 
        </div>
      </main>
    </div>
  );
}

export default App;
