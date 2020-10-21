import styled, { css } from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  background: transparent;
  border-radius: 3px;
  color: palevioletred;
  border: 2px solid palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;

  // import css from styled components & interpolate a function into the template literal
  // the function gets passed the props of our component
  ${props =>
    props.primary &&
    css`
      color: crimson;
      border: 2px solid crimson;
    `};

  &:hover {
    background-color: ${(props) =>
      props.primary ? 'crimson' : 'palevioletred'};
    color: white;
  }
`;

export default Button;
