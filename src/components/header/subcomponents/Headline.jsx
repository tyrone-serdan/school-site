import React from 'react';
import styled from 'styled-components';
import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import PContent from '../../popup/PContent';

function Headline({ title, author, content, url, photoCredits }) {
  return (
    <Popup
      trigger={
        <Article bg={url}>
          <div>
            <h1>{title}</h1>
            <h3>{author}</h3>
            <h5>{photoCredits}</h5>
          </div>
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
        </Article>
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

export default Headline;

const Article = styled.button`
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.1) 0%,
      rgba(0, 0, 0, 0.1) 100%
    ),
    url(${(props) => props.bg});
  background-size: cover;
  height: 500px;
  width: 600px;
  color: #f1f7ed;
  border: none;
  text-align: left;
  background-color: black;

  &:hover {
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.8) 0%,
        rgba(0, 0, 0, 0) 100%
      ),
      url(${(props) => props.bg});
    background-size: cover;
    background-color: black;
    cursor: pointer;
  }

  svg {
    visibility: collapse;
  }

  h3,
  h5 {
    margin-left: 2%;
  }

  div {
    margin-top: 90%;
    margin-bottom: 0%;
    margin-right: 10%;
  }

  @media (max-width: 922px) {
    background-size: cover;
    width: 100%;
    height: 100%;
    text-align: center;

    &:hover {
      background-size: cover;
    }

    svg {
      visibility: visible;
      text-align: center;
      padding-top: 10%;
      padding-bottom: 10%;
      display: block;
      margin: auto;
      animation: animateDown infinite 1.3s;
    }

    h1 {
      margin-top: 35%;
      font-size: 3.5rem;
    }
    div {
      margin: 0;
      white-space: normal;
    }
  }
`;
