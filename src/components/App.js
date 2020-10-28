import React from 'react';
import styled from 'styled-components';
import Game from './Game';
import GlobalStyle from '../globalStyles';

export const Container = styled.div`
  text-align: center;
  padding: 1rem;
`;

export const Title = styled.h1`
  background: -webkit-linear-gradient(319deg, #118ab2, #06d6a0, #ffd166);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 40px;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>TIC-TAC-TOE</Title>
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
