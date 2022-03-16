import React from 'react';
import styled from 'styled-components';

function Quote() {
  return (
    <Container>
      <h1>bathroom break</h1>
      <p>SAMPLE AUTHOR</p>
    </Container>
  );
}

export default Quote;

const Container = styled.div`
  text-align: center;
  margin-top: 15%;
  margin-bottom: 15%;
  font-size: 2rem;

  h1 {
    color: #089444;
  }
`;
