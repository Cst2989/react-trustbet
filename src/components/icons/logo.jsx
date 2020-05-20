import styled from 'styled-components'
import LogoImage from '../../assets/images/logo-mobile.png';
const Logo = styled.a`
    position: relative;
    display: block;
    background-image: url(${LogoImage});
    background-size: 100%;
    width: 48px;
    height: 48px;
    margin: 17px;
`;

export default Logo;