import React from 'react';
import styled from 'styled-components';
import Game from './Game';
import GlobalStyle from '../globalStyles';

export const Container = styled.div`
  text-align: center;
  padding: 0.5rem;
`;

export const Title = styled.h1`
  font-size: 40px;
`;

export const Footer = styled.div`
  margin-top: 40px;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>TIC-TAC-TOE</Title>
        <Game />
        <Footer>
          <p>Styled components & React Hooks</p>
          <p>
            Made with{' '}
            <span role="img" aria-label="Love">
              💕
            </span>{' '}
            by Zsofi
          </p>
        </Footer>
      </Container>
    </>
  );
}

export default App;
