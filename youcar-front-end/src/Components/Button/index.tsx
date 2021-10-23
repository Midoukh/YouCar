import React from "react";
import styled from "styled-components";
interface IButtonProps {
  theme: "filled" | "outlined";
  text: string;
  className?: string;
}

const BaseButton = styled.button`
  padding: 0.9rem 1.5rem;
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
  @media (max-width: 800px) {
    margin-bottom: 0.5rem;
  }
  @media (max-width: 400px) {
    padding: 0.9rem 2rem;
  }
`;

const OutlinedButton = styled(BaseButton)`
  background-color: #ff3124;
  &:hover {
    background-color: transparent;
    color: #ff3124;
    border: 2px solid #ff3124;
  }
`;
const FilledButton = styled(BaseButton)`
  background-color: transparent;
  border: 2px solid #ff3124;
  color: #ff3124;
  &:hover {
    background-color: #ff3124;
    color: white;
    border: 2px solid transparent;
  }
`;

export const Button = (props: IButtonProps) => {
  const { theme, text, className } = props;

  if (theme === "outlined") {
    return (
      <FilledButton id="book" className={className}>
        {text}
      </FilledButton>
    );
  } else {
    return <OutlinedButton className={className}>{text}</OutlinedButton>;
  }
};
