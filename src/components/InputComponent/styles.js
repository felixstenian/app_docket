import styled from 'styled-components'

export const InputContainer = styled.div`
    display:flex;
    flex-direction: column;
    margin: 5px;
    gap: 5px;
`
export const Label = styled.label`
    font-size: 1.2em;
   
`

export const InputStyle = styled.input`

    border: 1px solid #282B63;
    border-radius: 5px;

    &:focus {
       outline: none;
       border: 3px solid #282B63;
    }

   &[type=text] {
       height: 30px;
       padding-left: 10px;
   }

   &[type=number] {
       align-self:  flex-start;
       height: 30px;
       padding-left: 10px;
   }

   &[type=password] {
       height: 30px;
       padding-left: 10px;
   }

   &[type=checkbox] {
        -moz-appearance:none;
        -webkit-appearance:none;
        -o-appearance:none;
        width: 30px;
        height: 30px;
        background-color: #FFF;
        cursor: pointer;
   }
   &[type=checkbox]:checked {
        background-color: #282B63;
        box-shadow: 0 0 0 3px #FFF inset; 
   }

   &[type=submit] {
    background:#282B63 ;
    border:none;
    font-size:1.4em;
    font-weight: bold;
    border-radius: 10px;
    color:#FFF;
    padding: 15px 0;
    cursor:pointer;
    align-self: flex-end;
    padding: 10px 50px;

    &:focus {
        background-color: #4a4fb5;
    }
    &:disabled {
       background-color: #AAA;
       cursor: not-allowed;
    }
   }
`

export const SelectStyle = styled.select`
    align-self:  flex-start;
    background-color: #FFF;
    border: 1px solid #282B63;
    border-radius: 5px;
    height: 30px;
    min-width: 200px;
    padding: 0 5px;
`
export const ErrorMessage = styled.p`
    padding-left: 5px;
    color: #FF0000;
`

export const ToolTipContainer = styled.div`

    position: relative;
    background-color: #666;
    color: #FFF;
    font-size: 1.5rem;
    font-weight: bold;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    align-self:  flex-start;
    display: grid;
    place-content: center;
    margin-top: 10px;
    cursor: help;

    span {
        position: absolute;
        background-color: #333;
        opacity: 0;
        padding: 10px;
        right:50%;
        top:50%;
        transform: translate(50%, -50%) scale(0.1); 
        border-radius: 5px;
        font-size: 1rem;
        text-align: center;
        min-width: 300px;
        white-space: pre-line;
        pointer-events: none;
        transition: all 0.3s ease-in-out;
    }

    &:hover span {
        transform: translate(calc(100% + 25px), -50%) scale(1) ;
        opacity: .8;
    }
`

export const PlusButton = styled.a`
    font-size: 1.2rem;
    font-weight: bold;
    background-color: #282B63;
    color: #FFF;
    padding: 0px 5px 1px 5px;
    border-radius: 8px;
    margin: 5px;
    cursor: pointer;
`
