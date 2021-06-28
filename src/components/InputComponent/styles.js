import styled, { css } from 'styled-components'

export const InputContainer = styled.div`
    display:flex;
    flex-direction: column;
    margin: 5px;
    gap: 5px;
`
export const Label = styled.label`
    font-size: 1.2em;
    ${props => props.required && css`
        &::after {
            content: '*';
            color: #FF0000;
        }
    `}; 
   
`

export const InputStyle = styled.input`
    border: 1px solid #afafaf;

    &:focus {
       outline: none;
       border: 3px solid #afafaf;
    }

   &[type=text] {
       height: 30px;
       padding-left: 10px;
   }

   &[type=number] {
       align-self: flex-start;
       height: 30px;
       padding-left: 10px;
   }

   &[type=submit] {
        background: #3570b2;
        font-size: 1.4rem;
        font-weight: bold;
        border-radius: 30px;
        color:#FFF;
        cursor:pointer;
        align-self: flex-start;
        padding: 10px 25px;

        &:hover {
            filter: brightness(0.9);
        }
        &:disabled {
            background-color: #AAA;
            cursor: not-allowed;
        }

        background: ${props => props.color};
        color: ${props => props.colorText};
   }
`

export const SelectStyle = styled.select`
    align-self:  flex-start;
    background-color: #FFF;
    border: 1px solid #afafaf;
    height: 30px;
    min-width: 20vw;
    padding: 0 5px;
`
export const ErrorMessage = styled.p`
    padding-left: 5px;
    color: #FF0000;
`
