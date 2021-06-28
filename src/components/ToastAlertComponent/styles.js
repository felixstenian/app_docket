import styled from 'styled-components'

export const Container = styled.div`
  background: rgba(25, 185, 142, 1);
  border-radius: 5px;
  color: #fff;
  padding: 16px;
  position: fixed;
  top: 4vh;
  left: 40vw;
  z-index: 999;
  transition: top 0.5s ease;
  overflow: auto;
  min-width: 20vw;

  display: flex;
  align-items: center;

  h4 {
    padding: 0 20px;
  }

  a {
      padding: 2px 15px;
      cursor: pointer;
  }

  @media (max-width: 600px) {
      width: 100vw;
      top: 2vh;
      left: 1vw;
  }
`
