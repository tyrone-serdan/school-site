import React from 'react';
import styled from 'styled-components';

function Name() {
  return (
    <Container>
      <h3>GLEANER</h3>
      <h1>The Student Publication of FSUU</h1>
    </Container>
  );
}

export default Name;

const Container = styled.div`
  background-color: #2b59c3;
  color: #f1f7ed;
  padding: 2%;

  h1 {
    font-size: 2.5rem;
  }

  h3 {
    font-size: 1.5rem;
  }
`;
