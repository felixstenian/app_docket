import styled from 'styled-components'

export const Container = styled.div`
    min-height: 100vh;
    display: grid;
    grid-template-rows: 8% auto 8%;
    grid-template-columns: 250px auto auto;
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
    /* padding: 50px; */
    justify-content: center;
    align-items: center;
`