import React from 'react'
import styled from 'styled-components'
interface IButtonProps {
    theme: "filled" | "outlined";
    text: string
}

const BaseButton = styled.button`
   padding: .9rem 1.5rem;
   outline: none;
   border-radius: 10px;
   color: white;
   font-weight: bold;
   border: 2px solid transparent;
   transition: all 200ms ease-in-out;
   box-sizing: border-box;
   margin-right: 1rem;
   cursor: pointer;
   white-space: nowrap;
   @media (max-width: 800px){
        margin-bottom: .5rem;
    }
    @media (max-width: 400px){
        padding: .9rem 2rem;
        
    }
`

const OutlinedButton = styled(BaseButton)`
    background-color: #FF3124;
    &:hover {
      background-color: transparent;
      color: #FF3124;  
      border: 2px solid #FF3124;

    }

`
const FilledButton = styled(BaseButton)`
    background-color: transparent;
    border: 2px solid #FF3124;
    color: #FF3124;
    &:hover {
      background-color: #FF3124;
      color: white;  
      border: 2px solid transparent;

    }

`

export const Button = (props: IButtonProps) => {
    const { theme, text } = props

    if (theme === 'outlined') {
        return <FilledButton>{text}</FilledButton>
    }
    else {
        return <OutlinedButton>{text}</OutlinedButton>
    }
}