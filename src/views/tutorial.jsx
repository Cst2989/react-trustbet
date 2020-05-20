import React, { useState } from "react";
import "./tutorial.scss";
import { Link } from "react-router-dom";
import Step1 from '../assets/images/step-1.png';
import StyledP from '../components/pharagraph/p';
import Button from '../components/button/button';
import ButtonsContainer from '../components/button/container';
import Step2 from '../assets/images/step-2.png';
import Step3 from '../assets/images/step-3.png';
import styled from 'styled-components';
const StyledImage = styled.img`
    margin-top: -84px;
    min-height: 486px;
`;
const Tutorial = props => {
    const [step, setStep ] = useState(1);
    return (
        <div className={'body ' + ( step !== 1 ? 'active' : '')}>
            <div className="tutorial">
                <div className={'step ' + ( step === 1 ? 'active' : '')}>
                    <StyledImage src={Step1} alt=""/>
                    <StyledP>Decide on a bet, set up its parameters and invite your friends to join in!</StyledP>
                </div>
                <div className={'step ' + ( step === 2 ? 'active' : '')}>
                    <StyledImage src={Step2} alt=""/>
                    <StyledP>Show the bet’s QR code or send it to other bettors that you want to invite.</StyledP>
                </div>
                <div className={'step ' + ( step === 3 ? 'active' : '')}>
                    <StyledImage src={Step3} alt=""/>
                    <StyledP h90>You have completed the tutorial. You’re all set now.</StyledP>
                </div>
                <div className="steps">
                    <div className={'step_buble ' + ( step === 1 ? 'active' : '')}></div>
                    <div className={'step_buble ' + (step === 2 ? 'active' : '')}></div>
                    <div className={'step_buble ' + (step === 3 ? 'active' : '')}></div>
                </div>
                <ButtonsContainer>
                    {step === 1  ? (
                        <Button secondary as={Link} to="/create-bet">Skip</Button>
                    )   : (
                        <Button secondary onClick={(ev) => setStep(step - 1)}>Previous</Button>
                    )}
                    {step === 3  ? (
                        <Button no_icon as={Link} to="/create-bet">Bet</Button>
                    ) : (
                        <Button no_icon onClick={(ev) => setStep(step+1)}>Next</Button>
                    )}
                </ButtonsContainer>
            </div>
        </div>
    );
};
export default Tutorial;
