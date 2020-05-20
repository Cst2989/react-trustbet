import styled, { css } from 'styled-components'

const Box = styled.div`
    width: calc(100% - 64px);
    height: auto;
    border-radius: 16px;
    background: #fff;
    padding: 32px;
    margin-bottom: 16px;
    position: relative;
    display: block;
    max-width: 100%;
    h3 {
        font-size: 16px;
        color: #0A0770;
        font-weight: bold;
        text-align: left;
    }
    p {
        font-size: 16px;
        color: #0A0770;
        text-align: left;
    }
`;

export default Box;