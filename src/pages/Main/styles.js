import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    position: relative;
    right: 43vw;
    margin-top: 20px;
    font-size: 2.3rem;
  }
`

export const Header = styled.header`
  background: #fafafa;
  margin: 18px;
  border-radius: 5px;
  padding: 20px 40px;
  box-shadow: 1px 2px rgb(0 0 0 / 10%);
  display: flex;
  flex-flow: column wrap;
  
  header, article, div {
    margin: 8px 0;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    article:last-child {
      background: rgba(235, 240, 245,1);
      height: 3vh;
      
      display: flex;
      align-items: center;
      
      padding: 20px 20px;
      margin: 0;
    }
  }

  div {
    strong:last-child {
      padding-left: 40px;
    }
    
  }
`

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    
    @media (max-width: 600px) {
      flex-direction: column;
      justify-content: center;
    }
  
`

export const ContentForm = styled.div`
    width: 48vw;
    box-shadow: 1px 2px rgb(0 0 0 / 10%);
    margin-bottom: 15px;

    div {
      background: #fff;

      h2 {
        border-bottom: 3px solid #f3f3f3;
        font-size: 2rem;
        font-weight: 300;
        padding: 15px;
      }
    }

    @media (max-width: 600px) {
      width: 95vw;
    }
  
`

export const ContentSolicitations = styled.div`
  width: 48vw;
  margin-right: 13px;

  @media (max-width: 600px) {
      width: 95vw;
      margin-right: 0;
  }
`

export const Loader = styled.div`
    position: fixed;
    z-index: 999;
    width: 50px;
    height: 50px;
    bottom: 50vh;
    animation: is-rotating 1s infinite;
    border: 8px solid #e5e5e5;
    border-radius: 50%;
    border-top-color: rgba(25, 185, 142, 1);
    height: 50px;
    width: 50px;

    @keyframes is-rotating {
    to {
        transform: rotate(1turn);
    }
}
`
