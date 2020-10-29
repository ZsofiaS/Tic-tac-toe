import styled, { css } from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  background: transparent;
  background-image: none;
  color: black;
  margin: 0 1em;
  padding: 0.6em 0.9em;
  transition: 1s background-image ease-out;
  font-family: 'Grandstander', cursive;
  font-size: 18px;
  border-radius: 3px;
  border: none;

  // import css from styled components & interpolate a function into the template literal
  // the function gets passed the props of our component
  ${(props) =>
    props.primary &&
    css`
      color: crimson;
      border: 2px solid crimson;
    `};

  &:hover {
    background-image: linear-gradient(to left, #8adaf5, #82fcdc, #ffe099);
    background-image: linear-gradient(to left, #118ab2, #06d6a0, #ffd166);
    color: black;
  }
`;

export default Button;
