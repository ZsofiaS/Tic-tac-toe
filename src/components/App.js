import React from 'react';
import styled from 'styled-components';
import Game from './Game';

const Container = styled.div`
  text-align: center;
  padding: 1rem;
`;

function App() {
  return (
    <Container>
      <h1>Tic-tac-toe</h1>
      <p>With styled components & React Hooks</p>
      <Game />
    </Container>
  );
}

export default App;
