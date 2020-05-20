import styled, { css } from 'styled-components'
import IconRight from '../../assets/images/icon-right.png';
import IconChecked from '../../assets/images/icon-check.png';

const Button = styled.button`
    width: calc(100% - 32px);
    height: 56px;

    color: #fff;
    background: #FEBE01;
    font-size: 16px;
    font-weight: bold;
    font-family: 'Poppins';
    line-height: 55px;
    border-radius: 36px;
    position: relative;
    display: block;
    cursor: pointer;
    text-decoration: none;
    margin: auto;
    margin-left: 16px;
    margin-right: 16px;
    &:after {
        position: absolute;
        content: "";
        display: block;
        width: 24px;
        height: 24px;
        background-image: url(${IconRight});
        top: 16px;
        right: 24px;;
    }
    ${props => props.no_icon && css`
        &:after {
            display: none;
        } 
    `}
    ${props => props.secondary && css`
        background: transparent;
        border: 2px solid #FEBE01;
        color: #FEBE01;
    `}
    ${props => props.blue && css`
        background: #0A0770;
        &:after {
            background-image: url(${IconChecked});
        }
    `}
`;

export default Button;