import React from 'react';
import styled from 'styled-components';

function Name() {
  return (
    <Container>
      <Flexbox>
        <h5>Abp. Carmelo D.F Morelos Campus</h5>
          <h1>GLEANER</h1>
          <h3>The Student Publication of Father Saturnino Urios University</h3>
      </Flexbox>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="currentColor"
        class="bi bi-arrow-down"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
        />
      </svg>
    </Container>
  );
}

export default Name;

const Container = styled.div`
  background-color: #2A0E74;
  color: #f1f7ed;
  padding: 2%;
  padding-right: 3%;

  h1,
  h3,
  h5 {
    margin: 0;
  }

  h1 {
    font-size: 4.5rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  svg {
    visibility: collapse;
  }

  @media (max-width: 922px) {
    padding-right: 0%;
    h1,
    h3,
    h5 {
      text-align: center;
      white-space: normal;
    }

    svg {
      visibility: visible;
      text-align: center;
      padding-top: 10%;
      padding-bottom: 3%;
      display: block;
      margin: auto;
      animation: animateDown infinite 1.3s;
    }
  }
`;

const Flexbox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 100%;
`;
