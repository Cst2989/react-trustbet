import React, { useState } from "react";
import Web3 from "web3";
const { abi } = require("../contracts/TrustBet.json");
const CreateBet = props => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [options, setOptions] = useState([]);
    const [trustee, setTrustee] = useState(
        "0x9e785c918E1a4017DDc5cf580fc1fbD36E3BB9eB"
    );
    const [amount, setAmount] = useState(10);
    const handleNrOfOptions = nr => {
        const array = Array.from({ length: nr });
        setOptions(array);
    };
    const handleOptionChange = (value, idx) => {
        const newOptions = options.map((option, index) => {
        if (index === idx) {
            option = value;
        }
        return option;
        });
        setOptions(newOptions);
    };
    const createBet = async () => {
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();

        const TrustBetAddress = "0x40720315dBDA442580118CD8c56bbD9a28b77694";
        const TrustBet = new web3.eth.Contract(abi, TrustBetAddress);
        const [manager] = accounts;

        const createBetTx = await TrustBet.methods
        .createBet(
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
        )
        .send({
            from: manager,
            gas: 500000
        });

        // Full emitted event
        console.log(createBetTx.events.CreatedBet);
        props.history.push(
        `/bet/${createBetTx.events.CreatedBet.returnValues.betId}/`
        );
    };
    return (
        <main className="App-body">
            <div className="createBet">
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={ev => setName(ev.target.value)}
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={ev => setDescription(ev.target.value)}
                />
                <input
                    type="number"
                    placeholder="Number of Options"
                    onChange={ev => handleNrOfOptions(ev.target.value)}
                />
                {options.map((option, index) => (
                <div>
                    <input
                        key={index}
                        type="text"
                        placeholder="Option"
                        value={option}
                        onChange={ev => handleOptionChange(ev.target.value, index)}
                    />
                </div>
                ))}
                <input
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={ev => setAmount(ev.target.value)}
                />
                <input
                    type="text"
                    placeholder="Trustee"
                    value={trustee}
                    onChange={ev => setTrustee(ev.target.value)}
                />

                <button onClick={createBet}>Create Bet</button>
            </div>
        </main>
    );
    };

export default CreateBet;
