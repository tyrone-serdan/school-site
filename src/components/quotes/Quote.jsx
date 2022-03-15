import React from 'react';
import styled from 'styled-components';

function Quote() {
  return (
    <Container>
      <h1>SAMPLE QUOTE</h1>
      <p>SAMPLE AUTHOR</p>
    </Container>
  );
}

export default Quote;

const Container = styled.div`
  text-align: center;
  margin-top: 3%;
  margin-bottom: 3%;
  font-size: 2rem;
`;
