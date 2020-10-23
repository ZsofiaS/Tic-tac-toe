import React from 'react';
import styled from 'styled-components';
import Game from './Game';
import GlobalStyle from '../globalStyles';

const Container = styled.div`
  text-align: center;
  padding: 1rem;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <h1>Tic-tac-toe</h1>
        <Game />
        <p>Styled components & React Hooks</p>
        <p>
          Made with{' '}
          <span role="img" aria-label="Love">
            💕
          </span>{' '}
          by Zsofi
        </p>
      </Container>
    </>
  );
}

export default App;
