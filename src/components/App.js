import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import Game from './Game';

const Container = styled.div`
  text-align: center;
  padding: 1rem;
`;

function App() {
  return (
    <Container>
      <h1>Tic-tac-toe</h1>
      <p>Styled components & React Hooks</p>
      <Button onClick={() => console.log('clicked!')}>Just a button</Button>
      <Button primary>A primary button</Button>
      <Game />
    </Container>
  );
}

export default App;
