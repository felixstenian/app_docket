import styled from 'styled-components'

import background from '../../assets/backgroung-header.png'

export const Header = styled.header`
    grid-area: header;
    background: url(${background}) no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    color: #fff;
    padding: 10px 0;

    img {
        width: 5vw;
        margin: 0 40px;
    }
`
