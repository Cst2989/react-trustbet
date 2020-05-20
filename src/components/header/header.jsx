import React from 'react';
import styled from 'styled-components';
import Logo from '../icons/logo';
import Profile from '../icons/profile';
const Header = styled.div`
    width: 100%;
    height: auto;
    display:flex;
    justify-content: space-between;
    background: transparent;
`;
const HeaderBar = (props) => {
  return (
    <Header>
      <Logo href="/"></Logo>
      <Profile href="/profile"></Profile>
    </Header>
  )
}
export default HeaderBar;