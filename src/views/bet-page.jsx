import React, {useEffect, useState} from "react";
import Web3 from "web3";
const { abi } = require("../contracts/TrustBet.json");
const BetPage = props => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [options, setOptions] = useState([]);
    const id = props.match.params.betID;
    useEffect(() => {
        getBet()
    }, []);
    const getBet = async () => {
        const web3 = new Web3(window.ethereum);
        const TrustBetAddress = "0x40720315dBDA442580118CD8c56bbD9a28b77694";
        const TrustBet = new web3.eth.Contract(abi, TrustBetAddress);
        const Bet = await TrustBet.methods.betDetails(id).call();
        setName(Bet[1]);
        setDescription(Bet[2]);
        setOptions(Bet[3])
        console.log(Bet);
    };
    return <div>
        <h2>Bet Page {id}</h2>
        <h2>Name : {name}</h2>
        <h2>Description : {description}</h2>
        <h2>Options: { options.join(',') }</h2>
    </div>;
};

export default BetPage;
