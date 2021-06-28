import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr auto;
    grid-template-columns: 5vw 1fr 5vw;

    grid-template-areas:
    "header header header"
    "content content content"
    "footer footer footer";
`

export const Content = styled.main`
    grid-area: content;
    background: #f3f3f3;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
