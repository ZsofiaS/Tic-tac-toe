import styled, { css } from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  background: transparent;
  border-radius: 3px;
  color: black;
  border: 2px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(to left, #118ab2, #06d6a0, #ffd166);
  background-image: linear-gradient(to left, #118ab2, #06d6a0, #ffd166);
  margin: 0 1em;
  padding: 0.5em 0.8em;
  transition: 0.3s all ease-out;
  font-family: 'Grandstander', cursive;
  font-size: 18px;
  color: white;

  // import css from styled components & interpolate a function into the template literal
  // the function gets passed the props of our component
  ${(props) =>
    props.primary &&
    css`
      color: crimson;
      border: 2px solid crimson;
    `};

  &:hover {
    background-color: none;
    background-image: none;
    color: black;
  }
`;

export default Button;
