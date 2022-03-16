import React from 'react';
import styled from 'styled-components';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import PContent from '../popup/PContent';

function Article({ title, author, content, url, showArrow }) {
  return (
    <Popup
      trigger={
        <Container bg={url}>
          <h1>{title}</h1>
          <h3>{author}</h3>
          {showArrow && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              class="bi bi-arrow-down-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" />
            </svg>
          )}
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
  height: 717px;
  border: none;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%),
    url(${(props) => props.bg});
  background-repeat: no-repeat;
  background-size: cover;

  &:hover {
    cursor: pointer;
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.8) 0%,
        rgba(0, 0, 0, 0) 100%
      ),
      url(${(props) => props.bg});
    background-repeat: no-repeat;
    background-size: cover;
  }

  h1,
  h3,
  svg {
    color: #f1f7ed;
  }

  svg {
    visibility: collapse;
  }

  @media (max-width: 922px) {
    svg {
      visibility: visible;
      margin-top: 75%;
      animation: animateDown infinite 1.3s;
    }
  }
`;
