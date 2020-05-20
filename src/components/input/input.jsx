import styled, { css } from 'styled-components'
import EditIcon from '../../assets/images/icon-edit.png';
import ListIcon from '../../assets/images/icon-list.png';
import NumberIcon from '../../assets/images/icon-number.png';
import UserIcon from '../../assets/images/icon-user.png';
import CalendarIcon from '../../assets/images/icon-calendar.png';
const Input = styled.input`
    max-width: 100%;
    width: 100%;
    height: 25px;
    padding-left: 30px;
    border: none;
    color: #0A0770;
    font-size: 16px;
    margin-bottom: 10px;
    background-position: left center;
    background-repeat: no-repeat; 
    ::placeholder {
        color: #ABAAC5;
    }
    &:focus {
        border-bottom: 1px solid #0A0770;
    }
    ${props => props.no_icon && css`
        background-image: none;
    `}
    ${props => props.number && css`
        background-image: url(${NumberIcon});
    `}
    ${props => props.edit && css`
        background-image: url(${EditIcon});
    `}
    ${props => props.user && css`
        background-image: url(${UserIcon});
    `}
    ${props => props.calendar && css`
        background-image: url(${CalendarIcon});
    `}
    ${props => props.list && css`
        background-image: url(${ListIcon});
    `}
`;

export default Input;