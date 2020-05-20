import React, { useState, useEffect } from "react";
import Web3 from "web3";
import Box from '../components/box/box';
import Input from '../components/input/input';
import StyledLink from '../components/link/link';
import Button from '../components/button/button';
const { abi } = require("../contracts/TrustBet.json");

const CreateBet = props => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [options, setOptions] = useState(['']);
    const [trustee, setTrustee] = useState("");
    const [expiry, setExpiry] = useState("");
    const [amount, setAmount] = useState(0);

    const addOption = () => {
        setOptions([...options, ''])
    }
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
    useEffect(() => {
            if(!window.ethereum) {
                props.history.push(
                    `/login`
                );
            }
    }, []);
    return (
        <main className="App-body">
            <div className="createBet">
                <h1 className="betHeader">Bet name</h1>
                <Box>
                    <h3>Bet Definition</h3>
                    <p>Write a short description of your bet - give context and details for better success.</p>
                    <Input
                        type="text"
                        edit="true"
                        placeholder="Description"
                        value={description}
                        onChange={ev => setDescription(ev.target.value)}
                    />
                </Box>
                <Box>
                    <h3>Bet Options</h3>
                    <p>Define the outcome for this option. Bettor cand choose out of these.</p>
                    {options.map((option, index) => (
                        <div key={index}>
                            <Input
                                list="true"
                                key={index}
                                type="text"
                                placeholder="Option"
                                value={option}
                                onChange={ev => handleOptionChange(ev.target.value, index)}
                            />
                        </div>
                    ))}
                    <StyledLink onClick={addOption}>Add another</StyledLink>
                </Box>
                <Box>
                    <h3>Bet Specifications</h3>
                    <p>Define a value for your bet, add a person which you all trust and set an expiry date.</p>
                    <Input
                        type="number"
                        number="true"
                        placeholder="Amount"
                        value={amount}
                        onChange={ev => setAmount(ev.target.value)}
                    />
                    <Input
                        type="number"
                        user="true"
                        placeholder="Trustee"
                        value={trustee}
                        onChange={ev => setTrustee(ev.target.value)}
                    />
                    <Input
                        type="date"
                        calendar="true"
                        placeholder="Expiry date"
                        value={expiry}
                        onChange={ev => setExpiry(ev.target.value)}
                    />
                </Box>
                <Button blue="true" onClick={createBet}>Save</Button>
            </div>
        </main>
    );
    };

export default CreateBet;
