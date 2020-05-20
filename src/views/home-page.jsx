import React from 'react';
import Button from '../components/button/button';
import HomeImage from '../assets/images/home.png'
import { Link } from "react-router-dom";
import styled from 'styled-components';
import StyledH2 from '../components/headers/h2';
import StyledP from '../components/pharagraph/p';
const StyledImage = styled.img`
    margin-top: -84px;
`;
const HomePage = () => {
  return (
    <div className="body">
      <StyledImage src={HomeImage} alt=""/>      
      <StyledH2>Bet on Ethereum</StyledH2>
      <StyledP className="tagline">The easiest way to track <br/> your bets with your friends</StyledP>
      <Button as={Link} to="/tutorial">Start Betting</Button>
    </div>
  )
}
export default HomePage;