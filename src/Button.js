import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  color: ${(props) => (props.primary ? 'crimson' : 'palevioletred')};
  border: ${(props) =>
    props.primary ? '2px solid crimson' : '2px solid palevioletred'};
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;

  &:hover {
    background-color: ${(props) =>
      props.primary ? 'crimson' : 'palevioletred'};
    color: white;
  }
`;

export default Button;
