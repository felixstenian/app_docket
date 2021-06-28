import styled from 'styled-components'

export const ModalContainer = styled.article`
    position: fixed;
    z-index: 999;
    display: flex;
    flex-direction: column;
    width: 600px;
    overflow: auto;
    background-color: #FFF;
    border: 1px solid #f3f3f3;
    border-radius: 5px;
    bottom: 50vh;
    left: 50vw;
    transform: translate(-50%, 50%);
    box-shadow: 1px 2px rgb(0 0 0 / 10%);

    div {
        padding: 2px 8px;

        p {
            padding: 0 14px;
        }
    }

    @media (max-width: 600px) {
      width: 95vw;
    }
`
export const ModalHeader = styled.header`
    position: relative;
    width: 100%;
    padding-bottom: 10px;
    margin-bottom: 25px;
    padding: 20px;
    
    h3 {
        font-weight: 400;
    }
    
    & a {
        position: absolute;
        bottom: 20px;
        right: 0;
        border-radius: 8px;
        padding: 2px 20px;
        cursor: pointer;
    }
`

export const Actions = styled.div`
    background: #f3f3f3;
    margin-top: 20px;
    div {
        float: right;
    }

`
