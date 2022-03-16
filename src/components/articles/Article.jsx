import React from 'react';
import styled from 'styled-components';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function Article() {
  return (
    <Popup
      trigger={
        <Container>
          <h1>TITLE HEADER</h1>
          <h3>AUTHOR</h3>
        </Container>
      }
      modal
    >
      <h1>popup content</h1>
    </Popup>
  );
}

export default Article;

const Container = styled.button`
  text-align: center;
  width: 100%;
  background: none;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;
