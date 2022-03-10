import React from 'react';
import styled from 'styled-components';
import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function Headline({ title, author, date }) {
  return (
    <Popup
      trigger={
        <Article>
          <div>
            <h1>{title}</h1>
            <h3>{author}</h3>
            <h5>{date}</h5>
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
    >
      <h1>popup content</h1>
    </Popup>
  );
}

export default Headline;

const Article = styled.button`
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.5) 100%
    ),
    url(${'https://picsum.photos/500/700'});
  height: 500px;
  width: 700px;
  color: #f1f7ed;
  border: none;
  text-align: left;

  &:hover {
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.7) 0%,
        rgba(0, 0, 0, 0.7) 100%
      ),
      url(${'https://picsum.photos/500/700'});
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
    margin-right: 50%;
    margin-bottom: 50%;
    white-space: nowrap;
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
