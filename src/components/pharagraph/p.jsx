import React from 'react';
import styled, {css} from 'styled-components';
const StyledP = styled.p`
    font-family: 'Poppins', sans-serif;
    font-size:24px;
    line-height:30px;
    color: #0A0770;
    ${props => props.h90 && css`
        height: 90px;
    `}
`;
export default StyledP;