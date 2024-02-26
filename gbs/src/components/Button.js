import styled from "styled-components";

export const StyledButton = styled.button`
  text-transform: capitalize;
  font-size: 1.1rem;
  background: transparent;
  border: 0.05rem solid var(--clr-accent2);
  border-color: ${props => props.cart?'var(--mainYellow)':'var(--lightBlue)'};
  // border-color: ${props => props.nav?'var(--mainWhite)':'var(--lightBlue)'};
  color: ${prop => prop.cart?'var(--mainYellow)':'var(--lightBlue)'};
  // color: ${props => props.nav?'var(--mainWhite)':'var(--lightBlue)'};
  border-radius: 0.5rem;
  padding: 0.5rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: ${prop => prop.cart?'var(--mainYellow)':'var(--lightBlue)'};
    color: var(--mainBlue);
  }
  &:focus {
    outline: none;
  }
`