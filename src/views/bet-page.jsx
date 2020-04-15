import React from "react";
import Web3 from "web3";
const { abi } = require("../contracts/TrustBet.json");
const BetPage = props => {
    const getBet = async () => {
        const web3 = new Web3(window.ethereum);
        const TrustBetAddress = "0x40720315dBDA442580118CD8c56bbD9a28b77694";
        const TrustBet = new web3.eth.Contract(abi, TrustBetAddress);
        const Bet = await TrustBet.methods.betDetails(props.match.params.betID).call();
        console.log(Bet);
    };
    return <div>
        <h2>Bet Page {props.match.params.betID}</h2>
        <button onClick={getBet}>get Bet</button> 
    </div>;
};

export default BetPage;
