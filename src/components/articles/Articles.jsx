import React from 'react';
import styled from 'styled-components';
import Article from './Article';

function Articles() {
  return (
    <Container>
      <Article />
      <Article />
    </Container>
  );
}

export default Articles;

const Container = styled.div`
  display: flex;
  margin-bottom: 10%;

  @media (max-width: 922px) {
    flex-direction: column;
    margin-bottom: 0%;
  }
`;
