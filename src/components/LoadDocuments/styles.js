import styled from 'styled-components'

export const Container = styled.div`
    margin: 0 10px;

    h4 {
        font-weight: 300;
        font-size: 2rem;
        padding: 2px 8px;
    }
`

export const Card = styled.div`
    background: #fff;
    margin: 10px;
    box-shadow: 1px 2px rgb(0 0 0 / 10%);
    border-radius: 5px;
    /* min-width: 48vw; */

    header {
        padding: 10px;
        border-bottom: 2px solid #f3f3f3;
        display: flex;
        justify-content: space-between;
        align-items: center;

        h2 {
            font-weight: 400;
            font-size: 2rem;
        }

        button {
            border: 0;
            background: none;

            svg {
                &:hover {
                    color: red;
                }
            }
        }
    }

    div {
        display: flex;
        padding: 5px 20px;
        justify-content: space-between;

        article {
            display: flex;
            flex-flow: column wrap;
            justify-content: center;

            font-weight: 300;
            
        }
        
        article:last-child {
            p {
                padding: 0;
            }
        }
    }
    p {
        padding: 5px 0;
    }

    > p {
        border-top: 2px solid #f3f3f3;
        padding: 10px 18px;;
        font-weight: 300;
        font-size: 1.4rem;
    }

    @media (max-width: 600px) {
      margin: 5px;
    }
  
`

export const CardEmpty = styled.div`
    padding: 100px 20px;
    background: #fff;
    margin: 0 10px;
    box-shadow: 1px 2px rgb(0 0 0 / 10%);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;

    div {
        background: #f3f3f3;
        border-radius: 50px;
        padding: 10px 0;
        svg {
            color: #c4c8cc;
            width: 5vw;
            height: 7vh;
        }
    }
    p {
        color: #888786;
        font-size: 1.4rem;
        margin: 15px;
    }

    @media (max-width: 600px) {
        padding: 50px;
        margin-bottom: 20px;
      div {
        padding: 5px 0;
        svg {
            color: #c4c8cc;
            width: 20vw;
            height: 8vh;
        }
      }
    }
`
