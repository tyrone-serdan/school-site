import React from 'react';
import styled from 'styled-components';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import PContent from '../popup/PContent';

function Article({ title, author, content, url }) {
  return (
    <Popup
      trigger={
        <Container bg={url}>
          <h1>{title}</h1>
          <h3>{author}</h3>
        </Container>
      }
      modal
      lockScroll
    >
      {(close) => (
        <PContent
          title={title}
          author={author}
          content={content}
          close={close}
        />
      )}
    </Popup>
  );
}

export default Article;

const Container = styled.button`
  text-align: center;
  width: 100%;
  height: 800px;
  background: none;
  border: none;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%),
    url(${(props) => props.bg});

  &:hover {
    cursor: pointer;
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.8) 0%,
        rgba(0, 0, 0, 0) 100%
      ),
      url(${(props) => props.bg});
  }

  h1 {
    color: #f1f7ed;
  }

  h3 {
    color: #f1f7ed;
  }
`;
