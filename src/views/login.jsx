import React from "react";
import "./login.scss";
import Web3 from "web3";
import Metamask from '../assets/images/metamask-logo.png'
import { Link } from "react-router-dom";
const Login = props => {
    const handleClick = () => {
        try {
            window.ethereum.enable().then(function() {
                const web3 = new Web3(window.ethereum);
                //setLoggedIn(true);
                web3.eth.getAccounts().then(address => {
                    props.history.push(
                        `/create-bet`
                    );
                });
            });
        } catch (e) {
            alert('error')
        }
    };
    return (
        <div className="body active">
            <div className="popup">
                <img src={Metamask} alt=""/>
                <h2>Connect your wallet</h2>
                <p>In order to use Trustbet you have to connect your Metamask Wallet</p>
                <div className="buttons">
                    <Link className="button button--secondary" to="/">
                        Cancel
                    </Link>
                    <div className="button button--no-icon" onClick={handleClick}>
                        Connect
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Login;
